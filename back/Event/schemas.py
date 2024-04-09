from pydantic import BaseModel
from datetime import datetime

class SEventBase(BaseModel):
    event_name: str
    event_description: str
    starting_time: datetime
    ending_time: datetime
    location: str
    participants_count: int
    
    class Config:
        orm_mode = True

class SEventCreate(SEventBase):
    admin_comment: str | None = None
    pass

class SEvent(SEventBase):
    id: int

    class Config:
        orm_mode = True