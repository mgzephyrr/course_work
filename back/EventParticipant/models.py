from back.database import Base
from sqlalchemy import CheckConstraint, Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

class EventParticipant(Base):
    __tablename__ = 'event_participants'
    
    id = Column(Integer, primary_key=True)
    event_id = Column(Integer, ForeignKey('events.id'))
    user_id = Column(Integer, ForeignKey('users.id'))
    event_rewiew = Column(Text, nullable=True)
    event_rating = Column(Integer, nullable=False)
    organizer_comment = Column(Text, nullable=True)
    
    user = relationship("User", back_populates="eventparticipant", cascade='save-update, merge, delete')
    event = relationship("Event", back_populates="eventparticipants", cascade='save-update, merge, delete')
    
    __table_args__ = (
        CheckConstraint('event_rating BETWEEN 1 AND 5', name='check_event_rating'),
    )
    