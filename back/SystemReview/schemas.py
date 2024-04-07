from pydantic import BaseModel

class SSystemReviewBase(BaseModel):
    review_text: str
    
class SSystemReviewCreate(SSystemReviewBase):
    pass

class SSystemReview(SSystemReviewBase):
    id: int
    user_id: int
    
    class Config:
        orm_mode = True