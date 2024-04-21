from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Boolean
from back.database import Base


class MagicLink(Base):
    __tablename__ = "magic_links"

    id = Column(Integer, primary_key=True, index=True)
    token = Column(String, unique=True, index=True)
    created_at = Column(DateTime)