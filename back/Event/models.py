from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, Text
from database import Base
from sqlalchemy.orm import relationship

class Event(Base):
    __tablename__ = "events"
    
    id = Column(Integer, primary_key=True)
    event_name = Column(String(50), nullable=False)
    event_description = Column(Text, nullable=False)
    starting_time = Column(DateTime, nullable=False)
    ending_time = Column(DateTime, nullable=False)
    location = Column(String(100), nullable=False)
    participants_count = Column(Integer, nullable=False)
    admin_comment = Column(Text)