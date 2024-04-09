from pydantic import BaseModel

class SStudentOrganizationBase(BaseModel):
    stud_org_name: str
    stud_org_description: str
    vk_link: str
    telegram_link: str
    
class SStudentOrganizationCreate(SStudentOrganizationBase):
    pass

class SStudentOrganization(SStudentOrganizationBase):
    id: int
    
    class Config:
        orm_mode = True