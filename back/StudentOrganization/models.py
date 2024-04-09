from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, Text
from back.database import Base
from sqlalchemy.orm import relationship

class StudentOrganization(Base):
    __tablename__ = "student_organizations"
    
    id = Column(Integer, primary_key=True)
    stud_org_name = Column(String(100), nullable=False)
    stud_org_description = Column(Text, nullable=False)
    vk_link = Column(String, nullable=True)
    telegram_link = Column(String, nullable=True)
    
    eventorganizer = relationship("EventOrganizer", back_populates="student_organization", cascade='save-update, merge, delete')
    student_organization_members = relationship("StudentOrganizationMember", back_populates="student_organization", cascade='save-update, merge, delete')