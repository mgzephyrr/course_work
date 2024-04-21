import os
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime

from back.Event.schemas import SEvent, SEventCreate
from back.EventParticipant.schemas import SEventParticipant, SEventParticipantCreate
from back.EventOrganizer.schemas import SEventOrganizer
from back import crud
from back.User.depnds import get_current_user
from back.User.models import User
from back.User.schemas import SUser
from back.database import async_session_maker
from back.images_upload.repo import upload_image
from back.config import settings

router = APIRouter(
    prefix = "/events",
    tags= ["Работа с мероприятиями"]
)

@router.get("/upcoming")
async def get_upcoming_event() -> SEvent:
    return await crud.get_upcoming_event_from_db()

@router.post("/create")
async def create_event(event_name: str,
                       event_description: str,
                       starting_time: datetime,
                       ending_time: datetime,
                       location: str,
                       participants_count: int,
                       admin_comment: str = None,
                       file: UploadFile = None,
                       isOnlyStudent: bool = True,
                       stud_org_id: int = None,
                       user: User = Depends(get_current_user)
                       ) -> SEvent:

    if not file:
        raise HTTPException(status_code=404, detail="No avatar uploaded")

    event = SEventCreate(event_name = event_name,
                         event_description = event_description,
                         starting_time = starting_time,
                         ending_time = ending_time,
                         location = location,
                         participants_count = participants_count,
                         admin_comment=admin_comment,
                         isOnlyStudent=isOnlyStudent
                         )

    newFile = await upload_image(file)
    
    event = await crud.create_event(event=event, file_name=newFile.filename)
    
    if(event):
        await crud.create_event_organizer(user_id=user.id, event_id=event.id, stud_org_id=stud_org_id)
    
    return event

@router.get("")
async def get_all_events(user: User = Depends(get_current_user)) -> List[SEvent]:
    if user.system_role_id == 3:
        # Если роль пользователя - 3, возвращаем мероприятия, где isModerated = True и isOnlyStudent = False
        return await crud.get_moderated_events_not_only_student()
    elif user.system_role_id == 5:
        # Если роль пользователя - 5, возвращаем мероприятия, где isModerated = True
        return await crud.get_moderated_events()
    elif user.system_role_id == 4:
        # Если роль пользователя - 4, возвращаем все мероприятия
        return await crud.get_all_events()
    else:
        raise HTTPException(status_code=403, detail="Forbidden")

@router.get("/{event_id}")
async def get_event_info(event_id: int) -> SEvent:
    return await crud.get_event_info_by_id(event_id=event_id)

@router.get("/{event_id}/participants")
async def get_event_participants(event_id: int) -> List[SUser]:
    return await crud.get_event_participants_by_event_id(event_id = event_id)

@router.post("/{event_id}/sign")
async def create_event_participant(event_id: int, event_participant: SEventParticipantCreate, user: User = Depends(get_current_user)) -> SEventParticipant:
    if await crud.is_user_registered_for_event(event_id, user.id):
        raise HTTPException(status_code=400, detail="User is already registered for this event")
    else:
        return await crud.create_event_participant(event_id = event_id, user_id = user.id, event_participant = event_participant)

# @router.post("/{event_id}/organizer")
# async def create_event_organizer(event_id:int, user: SUser = Depends(get_current_user)) -> SEventOrganizer:

@router.get("/{event_id}/is_sign")
async def check_event_registration(event_id: int, user: User = Depends(get_current_user)):
    registration_status = await crud.is_user_registered_for_event(event_id=event_id, user_id=user.id)
    return registration_status

@router.post("{event_id}/addimage")
async def add_event_image(event_id: int, file: UploadFile = File(...)):
    newFile = await upload_image(file)
    return await crud.add_event_image(file_name=newFile.filename, event_id=event_id)

@router.get("{event_id}/image")
async def load_event_image_by_id(event_id: int) -> FileResponse:
    file_name = await crud.load_event_image(event_id=event_id)
    file_path = f"{settings.IMAGEDIR}{file_name}"
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")

    return FileResponse(file_path)

@router.put("/{event_id}/moderate")
async def moderate_event(event_id: int):
    if await crud.set_event_moderation_status(event_id=event_id, status=True):
        return {"message": "Event moderated successfully"}
    else:
        raise HTTPException(status_code=404, detail="Event not found")
    
@router.delete("/{event_id}/moderate/delete")
async def delete_event(event_id: int):
    if await crud.delete_event_from_db(event_id=event_id):
        return {"message": "Event deleted successfully"}
    else:
        raise HTTPException(status_code=404, detail="Event not found")
    
@router.get("/event_organizer/{event_id}")
async def get_event_organizer(event_id: int):
    return await crud.get_event_organizer_details(event_id)

