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
                       file: UploadFile = None
                       ) -> SEvent:

    if not file:
        raise HTTPException(status_code=404, detail="No avatar uploaded")

    event = SEventCreate(event_name = event_name,
                         event_description = event_description,
                         starting_time = starting_time,
                         ending_time = ending_time,
                         location = location,
                         participants_count = participants_count,
                         admin_comment=admin_comment
                         )

    newFile = await upload_image(file)
    return await crud.create_event(event=event, file_name=newFile.filename)

@router.get("")
async def get_all_events() -> List[SEvent]:
    return await crud.get_all_events()

@router.get("/{event_id}")
async def get_event_info(event_id: int) -> SEvent:
    return await crud.get_event_info_by_id(event_id=event_id)

@router.get("/{event_id}/participants")
async def get_event_participants(event_id: int) -> List[SEventParticipant]:
    return await crud.get_event_participants_by_event_id(event_id = event_id)

@router.post("/{event_id}/{user_id}")
async def create_event_participant(event_id: int, user_id: int, event_participant: SEventParticipantCreate) -> SEventParticipant:
    return await crud.create_event_participant(event_id = event_id, user_id = user_id, event_participant = event_participant)

# @router.post("/{event_id}/organizer")
# async def create_event_organizer(event_id:int, user: SUser = Depends(get_current_user)) -> SEventOrganizer:


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
