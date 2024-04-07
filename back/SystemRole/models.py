from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from back.database import Base


class SystemRole(Base):
    __tablename__ = "system_roles"

    id = Column(Integer, primary_key=True)
    role_name = Column(String(50), nullable=False)

    users = relationship("User", back_populates="system_role", cascade='save-update, merge, delete')
