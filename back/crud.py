from sqlalchemy import insert, select
from back.database import async_session_maker
import passlib.hash

from back.SystemReview.models import SystemReview
from back.SystemReview.schemas import SSystemReview, SSystemReviewBase, SSystemReviewCreate
from back.User.models import User
from back.User.schemas import SUserBase, SUserCreate, SUser
from back.SystemRole.models import SystemRole
from back.SystemRole.schemas import SSystemRole, SSystemRoleBase, SSystemRoleCreate
from back.Event.models import Event
from back.Event.schemas import SEvent, SEventBase, SEventCreate
from back.EventParticipant.schemas import SEventParticipant, SEventParticipantCreate
from back.EventParticipant.models import EventParticipant
from back.StudentOrganization.models import StudentOrganization
from back.StudentOrganization.schemas import SStudentOrganization, SStudentOrganizationBase, SStudentOrganizationCreate
from back.StudentOrganizationMember.models import StudentOrganizationMember
from back.StudentOrganizationMember.schemas import SStudentOrganizationMember
from back.StudentOrganizationRole.models import StudentOrganizationRole
from back.StudentOrganizationRole.schemas import SStudentOrganizationRole, SStudentOrganizationRoleBase, SStudentOrganizationRoleCreate
from back.EventOrganizer.models import EventOrganizer
from back.EventOrganizer.schemas import SEventOrganizer

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

async def get_event_participants_by_event_id(event_id: int) -> list[EventParticipant]:
    async with async_session_maker() as session:
        query = select(EventParticipant).where(EventParticipant.event_id == event_id)
        result = await session.execute(query)
        return result.scalars().all()
    
async def create_event_participant(event_id: int, user_id: int, event_participant: SEventParticipantCreate):
    async with async_session_maker() as session:
        db_event_participant = EventParticipant(event_id = event_id, 
                                                user_id = user_id, 
                                                event_rewiew = event_participant.event_rewiew, 
                                                event_rating = event_participant.event_rating, 
                                                organizer_comment = event_participant.organizer_comment)
        session.add(db_event_participant)
        await session.commit()
        await session.refresh(db_event_participant)
        return db_event_participant
    
async def create_student_org(student_org: SStudentOrganizationCreate):
    async with async_session_maker() as session:
        db_student_org = StudentOrganization(stud_org_name = student_org.stud_org_name,
                                             stud_org_description = student_org.stud_org_description,
                                             vk_link = student_org.vk_link,
                                             telegram_link = student_org.telegram_link)
        session.add(db_student_org)
        await session.commit()
        await session.refresh(db_student_org)
        return db_student_org

async def get_all_student_org() -> list[StudentOrganization]:
    async with async_session_maker() as session:
        result = await session.execute(select(StudentOrganization))
        return result.scalars().all()