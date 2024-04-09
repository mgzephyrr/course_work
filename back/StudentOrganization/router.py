from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from back.StudentOrganization.schemas import SStudentOrganization, SStudentOrganizationBase, SStudentOrganizationCreate
from back import crud
router = APIRouter(
    prefix="/studorg"
)

@router.post("/create")
async def create_event(student_org: SStudentOrganizationCreate) -> SStudentOrganization:
    return await crud.create_student_org(student_org=student_org)

@router.get("")
async def get_all_student_org() -> List[SStudentOrganization]:
    return await crud.get_all_student_org()