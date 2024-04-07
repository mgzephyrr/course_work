from sqlalchemy import insert, select
from database import async_session_maker
import passlib.hash

from SystemReview.models import SystemReview
from SystemReview.schemas import SSystemReview, SSystemReviewBase, SSystemReviewCreate
from User.models import User
from User.schemas import SUserBase, SUserCreate, SUser
from SystemRole.models import SystemRole
from SystemRole.schemas import SSystemRole, SSystemRoleBase, SSystemRoleCreate
from Event.models import Event
from Event.schemas import SEvent, SEventBase, SEventCreate

async def get_user(user_id: int):
    async with async_session_maker() as session:
        query = select(User).filter(User.id == user_id)
        result = await session.execute(query)
        return result.scalar_one_or_none()

async def get_user_by_email(email: str):
    async with async_session_maker() as session:
        query = select(User).filter(User.email == email)
        result = await session.execute(query)
        return result.scalar_one_or_none()

async def create_user(user: SUserCreate, system_role_id:int):
    async with async_session_maker() as session:
        db_user = User(email=user.email, 
                        system_role_id=system_role_id, 
                        hashed_password = passlib.hash.bcrypt.hash(user.hashed_password),
                        first_name = user.first_name,
                        last_name = user.last_name,
                        paternity = user.paternity)
        session.add(db_user)
        await session.commit()
        await session.refresh(db_user)
        return db_user

async def get_system_role(system_role_id: int):
    async with async_session_maker() as session:
        query = select(SystemRole).filter(SystemRole.id == system_role_id)
        result = await session.execute(query)
        return result.scalar_one_or_none()

async def get_system_role_by_name(system_role_name: str):
    async with async_session_maker() as session:
        query = select(SystemRole).filter(SystemRole.role_name == system_role_name)
        result = await session.execute(query)
        return result.scalar_one_or_none()

async def create_system_role(role: SSystemRoleCreate):
    async with async_session_maker() as session:
        db_role = SystemRole(role_name = role.role_name)
        session.add(db_role)
        await session.commit()
        await session.refresh(db_role)
        return db_role
    
async def create_event(event: SEventCreate):
    async with async_session_maker() as session:
        db_event = Event(event_name = event.event_name,
                         event_description = event.event_description,
                         starting_time = event.starting_time,
                         ending_time = event.ending_time,
                         location = event.location,
                         participants_count = event.participants_count,
                         admin_comment = event.admin_comment)
        session.add(db_event)
        await session.commit()
        await session.refresh(db_event)
        return db_event

async def get_all_events() -> list[Event]:
    async with async_session_maker() as session:
        result = await session.execute(select(Event))
        return result.scalars().all()