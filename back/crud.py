from fastapi import HTTPException
from sqlalchemy import and_, delete, insert, select
from back.database import async_session_maker
from datetime import datetime
import passlib.hash
from pytz import timezone

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

async def load_event_image(event_id: int):
    async with async_session_maker() as session:
        event = await session.get(Event, event_id)
        return event.image_file_name

async def add_event_image(file_name: str, event_id: int):
    async with async_session_maker() as session:
        event = await session.get(Event, event_id)
        event.image_file_name = file_name
        await session.commit()
        await session.refresh(event)
        return file_name

async def add_avatar_to_student_org(file_name: str, stud_org_id: int):
    async with async_session_maker() as session:
        stud_org = await session.get(StudentOrganization, stud_org_id)
        stud_org.avatar_file_name = file_name
        await session.commit()
        await session.refresh(stud_org)
        return file_name

async def load_student_org_avatar(stud_org_id: int):
    async with async_session_maker() as session:
        stud_org = await session.get(StudentOrganization, stud_org_id)
        return stud_org.avatar_file_name


async def load_user_avatar(user_id: int):
    async with async_session_maker() as session:
        user = await session.get(User, user_id)
        return user.avatar_file_name

async def add_avatar_to_current_user(file_name: str, user_id: int):
    async with async_session_maker() as session:
        user = await session.get(User, user_id)
        user.avatar_file_name = file_name
        await session.commit()
        await session.refresh(user)
        return file_name


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

async def create_event(event: SEventCreate, file_name: str):
    async with async_session_maker() as session:
        db_event = Event(event_name = event.event_name,
                         event_description = event.event_description,
                         starting_time = event.starting_time.replace(tzinfo=None),
                         ending_time = event.ending_time.replace(tzinfo=None),
                         location = event.location,
                         participants_count = event.participants_count,
                         admin_comment = event.admin_comment,
                         image_file_name = file_name,
                         isModerated = event.isModerated)
        session.add(db_event)
        await session.commit()
        await session.refresh(db_event)
        return db_event

async def get_event_info_by_id(event_id: int) -> Event:
    async with async_session_maker() as session:
        query = select(Event).filter(Event.id == event_id)
        result = await session.execute(query)
        return result.scalar_one_or_none()

async def get_stud_org_info_by_id(stud_org_id: int) -> StudentOrganization:
    async with async_session_maker() as session:
        query = select(StudentOrganization).filter(StudentOrganization.id == stud_org_id)
        result = await session.execute(query)
        return result.scalar_one_or_none()

async def get_events_for_user(user_id: int) -> list[Event]:
    async with async_session_maker() as session:
        query = select(Event).join(EventParticipant).where(EventParticipant.user_id == user_id)
        result = await session.execute(query)
        return result.scalars().all()

async def get_all_events() -> list[Event]:
    async with async_session_maker() as session:
        result = await session.execute(select(Event))
        return result.scalars().all()
    
async def get_moderated_events_not_only_student() -> list[Event]:
    async with async_session_maker() as session:
        query = select(Event).filter(and_(Event.isModerated == True, Event.isOnlyStudent == False))
        result = await session.execute(query)
        return result.scalars().all()

async def get_moderated_events() -> list[Event]:
    async with async_session_maker() as session:
        query = select(Event).filter(Event.isModerated == True)
        result = await session.execute(query)
        return result.scalars().all()

async def set_event_moderation_status(event_id: int, status: bool) -> bool:
    async with async_session_maker() as session:
        event = await session.get(Event, event_id)
        if event:
            event.isModerated = status
            await session.commit()
            await session.refresh(event)
            return True
        return False

async def get_student_organizations_for_user(user_id: int):
    async with async_session_maker() as session:
        query = select(StudentOrganization).\
            join(StudentOrganizationMember).\
            filter(and_(
                StudentOrganizationMember.user_id == user_id,
                StudentOrganizationMember.role_id == 1
            ))
        result = await session.execute(query)
        return result.scalars().all()

async def create_event_organizer(user_id: int, event_id: int, stud_org_id: int = None) -> bool:
    async with async_session_maker() as session:
        event_organizer = EventOrganizer(user_id= user_id, event_id=event_id, student_organization_id=stud_org_id)
        session.add(event_organizer)
        await session.commit()
        await session.refresh(event_organizer)
        return True
    
async def get_event_organizer_details(event_id: int):
    async with async_session_maker() as session:
        event_organizer = await session.execute(select(EventOrganizer).filter_by(event_id=event_id))
        event_organizer = event_organizer.scalars().first()

        if not event_organizer:
            raise HTTPException(status_code=404, detail="Event organizer not found")

        if event_organizer.student_organization_id:
            student_org = await session.execute(select(StudentOrganization).filter_by(id=event_organizer.student_organization_id))
            student_org = student_org.scalars().first()
            if student_org:
                return {"name": student_org.stud_org_name, "avatar": student_org.avatar_file_name}
            else:
                raise HTTPException(status_code=404, detail="Student organization not found")
        else:
            user = await session.execute(select(User).filter_by(id=event_organizer.user_id))
            user = user.scalars().first()
            if user:
                return {"name": f"{user.first_name} {user.last_name}", "avatar": user.avatar_file_name}
            else:
                raise HTTPException(status_code=404, detail="User not found")

async def delete_event_from_db(event_id: int) -> bool:
    async with async_session_maker() as session:
        statement = delete(Event).where(Event.id == event_id)
        result = await session.execute(statement)
        await session.commit()  # Применяем изменения в базе данных
        return bool(result.rowcount)

async def get_event_participants_by_event_id(event_id: int) -> list[User]:
    async with async_session_maker() as session:
        query = select(User).join(EventParticipant).filter(EventParticipant.event_id == event_id)
        result = await session.execute(query)
        return result.scalars().all()

async def get_upcoming_event_from_db() -> Event:
    async with async_session_maker() as session:
            current_time = datetime.utcnow()
            query = select(Event).filter(Event.starting_time > current_time).order_by(Event.starting_time)
            result = await session.execute(query)
            return result.scalars().first()

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

async def create_student_org(student_org: SStudentOrganizationCreate, file_name:str):
    async with async_session_maker() as session:
        db_student_org = StudentOrganization(stud_org_name = student_org.stud_org_name,
                                             stud_org_description = student_org.stud_org_description,
                                             vk_link = student_org.vk_link,
                                             telegram_link = student_org.telegram_link,
                                             avatar_file_name=file_name)
        session.add(db_student_org)
        await session.commit()
        await session.refresh(db_student_org)
        return db_student_org

async def get_all_student_org() -> list[StudentOrganization]:
    async with async_session_maker() as session:
        result = await session.execute(select(StudentOrganization))
        return result.scalars().all()
