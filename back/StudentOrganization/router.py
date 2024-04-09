import os
import uuid
from PIL import Image
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from typing import List
from back.config import settings

from back.StudentOrganization.schemas import SStudentOrganization, SStudentOrganizationBase, SStudentOrganizationCreate
from back import crud
router = APIRouter(
    prefix="/studorg",
    tags= ["Работа со студ организациями"]
)

@router.post("/create")
async def create_event(student_org: SStudentOrganizationCreate) -> SStudentOrganization:
    return await crud.create_student_org(student_org=student_org)

@router.get("")
async def get_all_student_org() -> List[SStudentOrganization]:
    return await crud.get_all_student_org()

@router.get("/avatar/{stud_org_id}")
async def load_user_avatar_by_id(stud_org_id: int) -> FileResponse:
    file_name = await crud.load_student_org_avatar(stud_org_id=stud_org_id)
    file_path = f"{settings.IMAGEDIR}{file_name}"
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    
    return FileResponse(file_path)

@router.post("/createavatar/{stud_org_id}")
async def create_upload_file(stud_org_id: int ,file: UploadFile = File(...)):
    if not file.filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        raise HTTPException(status_code=400, detail="Only JPEG, JPG and PNG files are allowed")
    
    if file.size > settings.MAX_FILE_SIZE_BYTES:
        raise HTTPException(status_code=400, detail="File size too large. Maximum size is 1 megabyte.")
    
    file.filename = f"{uuid.uuid4()}.jpg"
    contents = await file.read()
    
    with open(f"{settings.IMAGEDIR}{file.filename}", "wb") as f:
        f.write(contents)
    
    # Дополнительная проверка на валидность изображения
    try:
        image = Image.open(f"{settings.IMAGEDIR}{file.filename}")
        image.verify()  # Проверка на валидность изображения
        image.close()
    except Exception as e:
        os.remove(f"{settings.IMAGEDIR}{file.filename}")
        raise HTTPException(status_code=400, detail="Uploaded file is not a valid JPEG image")
    
    return await crud.add_avatar_to_student_org(file_name=file.filename, stud_org_id=stud_org_id)