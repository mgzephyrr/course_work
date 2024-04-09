from pydantic import BaseModel, Field

class SEventParticipantBase(BaseModel):
    event_rewiew: str | None = None
    event_rating: int | None = None
class SEventParticipantCreate(SEventParticipantBase):
    organizer_comment: str | None = None
    pass

class SEventParticipant(SEventParticipantBase):
    id: int
    user_id: int
    event_id: int
    class Config:
        orm_mode = True