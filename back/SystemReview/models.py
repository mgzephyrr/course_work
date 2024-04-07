from sqlalchemy import Column, Integer, ForeignKey, String
from database import Base
from sqlalchemy.orm import relationship

class SystemReview(Base):
    __tablename__ = "reviews"
    
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    review_text = Column(String(1024), nullable=False)
    
    user = relationship("User", back_populates="reviews")
    