from pydantic import BaseModel, Field

class SEventParticipantBase(BaseModel):
    event_rewiew: str
    event_rating: int = Field(..., ge=1, le=5)
class SEventParticipantCreate(SEventParticipantBase):
    organizer_comment: str | None = None
    pass

class SEventParticipant(SEventParticipantBase):
    id: int
    user_id: int
    event_id: int
    class Config:
        orm_mode = True