from datetime import timedelta
from fastapi import Depends, FastAPI, HTTPException
from jose import jwt
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import JWTException
import re
import auth
import crud
from Token.schemas import Token, TokenData
from User.models import User
from User.schemas import SUserBase, SUserCreate, SUser, SUserAuth
from SystemRole.models import SystemRole
from SystemRole.schemas import SSystemRole, SSystemRoleBase, SSystemRoleCreate
from database import engine, Base, async_session_maker
from config import settings
from User.router import router as router_users
from SystemRole.router import router as router_roles
from Event.router import router as router_events

app = FastAPI(
    title="SEMS"
)

app.include_router(router_roles)
app.include_router(router_users)
app.include_router(router_events)