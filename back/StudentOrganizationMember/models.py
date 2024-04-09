from back.database import Base
from sqlalchemy import CheckConstraint, Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

class StudentOrganizationMember(Base):
    __tablename__ = 'student_organization_members'
    
    user_id = Column(Integer, ForeignKey('users.id'), primary_key=True)
    student_organization_id = Column(Integer, ForeignKey('student_organizations.id'), primary_key=True)
    role_id = Column(Integer, ForeignKey('student_organization_roles.id'), nullable = False)
    
    user = relationship("User")
    student_organization = relationship("StudentOrganization")
    role = relationship("StudentOrganizationRole")