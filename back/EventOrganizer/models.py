from back.database import Base
from sqlalchemy import CheckConstraint, Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

class EventOrganizer(Base):
    __tablename__ = 'event_organizers'
    
    user_id = Column(Integer, ForeignKey('users.id'), primary_key=True)
    event_id = Column(Integer, ForeignKey('events.id'), primary_key=True)
    student_organization_id = Column(Integer, ForeignKey('student_organizations.id'), nullable=True)
    
    user = relationship("User", back_populates="eventorganizer", cascade='save-update, merge, delete')
    event = relationship("Event", back_populates= "eventorganizer", cascade='save-update, merge, delete')
    student_organization = relationship("StudentOrganization", back_populates="eventorganizer", cascade='save-update, merge, delete')