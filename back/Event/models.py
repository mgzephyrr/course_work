from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, Text, Boolean
from back.database import Base
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
    admin_comment = Column(Text, nullable=True)
    image_file_name = Column(String, nullable=True)
    isModerated = Column(Boolean, nullable=False)
    isOnlyStudent = Column(Boolean, nullable=False, default=False)

    eventparticipants = relationship("EventParticipant", back_populates="event", cascade='save-update, merge, delete')
    organizers = relationship("EventOrganizer", back_populates="event", cascade='save-update, merge, delete')
