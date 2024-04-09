from pydantic import BaseModel

class SStudentOrganizationRoleBase(BaseModel):
    role_name: str

class SStudentOrganizationRoleCreate(SStudentOrganizationRoleBase):
    pass

class SStudentOrganizationRole(SStudentOrganizationRoleBase):
    id: int

    class Config:
        orm_mode = True