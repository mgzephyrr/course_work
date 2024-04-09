from pydantic import BaseModel

class SStudentOrganizationMember(BaseModel):
    user_id: int
    student_organization_id: int
    role_id: int = 1
    