from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from back.Event.schemas import SEvent, SEventCreate
from back.EventParticipant.schemas import SEventParticipant, SEventParticipantCreate
from back import crud
from back.database import async_session_maker

router = APIRouter(
    prefix = "/events"
)

@router.post("/create")
async def create_event(event: SEventCreate) -> SEvent:
    return await crud.create_event(event=event)

@router.get("")
async def get_all_events() -> List[SEvent]:
    return await crud.get_all_events()

@router.get("/{event_id}")
async def get_event_participants(event_id: int) -> List[SEventParticipant]:
    return await crud.get_event_participants_by_event_id(event_id = event_id)

@router.post("/{event_id}/{user_id}")
async def create_event_participant(event_id: int, user_id: int, event_participant: SEventParticipantCreate) -> SEventParticipant:
    return await crud.create_event_participant(event_id = event_id, user_id = user_id, event_participant = event_participant)