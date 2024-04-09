from pydantic import BaseModel

class SEventOrganizer(BaseModel):
    user_id: int
    event_id: int
    student_organization_id: int | None = None
    
    class Config:
        orm_mode = True