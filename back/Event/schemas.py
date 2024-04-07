from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class SEventBase(BaseModel):
    event_name: str
    event_description: str
    starting_time: datetime
    ending_time: datetime
    location: str
    participants_count: int

class SEventCreate(SEventBase):
    admin_comment: Optional[str] = None
    pass

class SEvent(SEventBase):
    id: int

    class Config:
        orm_mode = True