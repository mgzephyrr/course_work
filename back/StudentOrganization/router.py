import os
import uuid
from PIL import Image
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from typing import List
from back.config import settings
from back.images_upload.repo import upload_image

from back.StudentOrganization.schemas import SStudentOrganization, SStudentOrganizationBase, SStudentOrganizationCreate
from back import crud
router = APIRouter(
    prefix="/studorg",
    tags= ["Работа со студ организациями"]
)

@router.post("/create")
async def create_stud_org(student_org_name: str, stud_org_description: str, vk_link: str, telegram_link: str, file: UploadFile = File(...)) -> SStudentOrganization:
    student_org = SStudentOrganizationCreate(stud_org_name = student_org_name,
                                             stud_org_description = stud_org_description,
                                             vk_link = vk_link,
                                             telegram_link = telegram_link)
    newFile = await upload_image(file)
    return await crud.create_student_org(student_org=student_org, file_name=newFile.filename)

@router.get("")
async def get_all_student_org() -> List[SStudentOrganization]:
    return await crud.get_all_student_org()

@router.get("{stud_org_id}/avatar")
async def load_user_avatar_by_id(stud_org_id: int) -> FileResponse:
    file_name = await crud.load_student_org_avatar(stud_org_id=stud_org_id)
    file_path = f"{settings.IMAGEDIR}{file_name}"
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    
    return FileResponse(file_path)

@router.post("/{stud_org_id}/createavatar")
async def create_upload_file(stud_org_id: int ,file: UploadFile = File(...)):
    newFile = await upload_image(file)
    return await crud.add_avatar_to_student_org(file_name=newFile.filename, stud_org_id=stud_org_id)

@router.get("{stud_org_id}/avatar")
async def load_stud_org_avatar_by_id(stud_org_id: int) -> FileResponse:
    file_name = await crud.load_student_org_avatar(stud_org_id=stud_org_id)
    file_path = f"{settings.IMAGEDIR}{file_name}"
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    
    return FileResponse(file_path)