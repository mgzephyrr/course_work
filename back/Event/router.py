from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from back.Event.schemas import SEvent, SEventCreate
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
