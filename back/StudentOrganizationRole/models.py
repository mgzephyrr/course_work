from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from back.database import Base


class StudentOrganizationRole(Base):
    __tablename__ = "student_organization_roles"

    id = Column(Integer, primary_key=True)
    role_name = Column(String(50), nullable=False)
    
    student_organization_members = relationship("StudentOrganizationMember", back_populates="role", cascade='save-update, merge, delete')