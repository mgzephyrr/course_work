from fastapi import APIRouter, HTTPException

from SystemRole.schemas import SSystemRole, SSystemRoleCreate
import crud


router = APIRouter(
    prefix="/role"
)

@router.post("/roles")
async def create_role(role: SSystemRoleCreate) -> SSystemRole:
    db_role = await crud.get_system_role_by_name(system_role_name= role.role_name)
    if db_role:
        raise HTTPException(status_code=400, detail="Role already exist")
    return await crud.create_system_role(role=role)

@router.get("/roles/{role_id}")
async def get_role(role_id: int) -> SSystemRole: 
    return await crud.get_system_role(system_role_id=role_id)