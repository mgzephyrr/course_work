import passlib.hash
from sqlalchemy import Column, ForeignKey, Integer, String
from back.database import Base
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String(52), nullable=False, unique=True)
    hashed_password = Column(String(1024), nullable= False)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    paternity = Column(String(50), nullable=True)
    system_role_id = Column(Integer, ForeignKey('system_roles.id', ondelete='CASCADE'), default=3)

    reviews = relationship("SystemReview", back_populates="user", cascade='save-update, merge, delete')
    system_role = relationship("SystemRole", back_populates="users", cascade='save-update, merge, delete', passive_deletes=True)
    eventparticipant = relationship("EventParticipant", back_populates="user", cascade='save-update, merge, delete')
    event_organizer = relationship("EventOrganizer", back_populates="user", cascade='save-update, merge, delete')
    student_organization_member = relationship("StudentOrganizationMember", back_populates="user", cascade='save-update, merge, delete')
    
    def verify_password(self, password: str):
        return passlib.hash.bcrypt.verify(password, self.hashed_password)
