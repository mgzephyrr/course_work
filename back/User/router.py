from datetime import timedelta
import re
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import jwt

from Token.schemas import Token
from User.schemas import SUser, SUserCreate
import auth
from config import settings
import crud
from jwt.exceptions import JWTException


router = APIRouter(
    prefix = "/auth"
)

email_regex = r'^[a-zA-Z0-9_.+-]+@edu\.hse\.ru$'

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


@router.post("/signup")
async def create_user(user: SUserCreate, system_role_id: int) -> SUser:
    if re.match(email_regex, user.email):
        db_role = await crud.get_system_role(system_role_id = system_role_id)
        if not db_role:
            raise HTTPException(status_code=400, detail="Role does not exist")
        db_user = await crud.get_user_by_email(email=user.email)
        if db_user:
            raise HTTPException(status_code=400, detail="Email already in use")
        
        return await crud.create_user(user=user, system_role_id=system_role_id)
    else: 
        raise HTTPException(status_code=400, detail="Only email addresses ending with @edu.hse.ru are allowed")

@router.post("/login", response_model=Token)
async def login_for_access_token(from_data: OAuth2PasswordRequestForm = Depends()):
    db_user = await crud.get_user_by_email(email=from_data.username)
    if not db_user or not auth.verify_password(from_data.password, db_user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": db_user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, settings.ALGORITHM
        )
        user = await crud.get_user_by_email(email=payload.get("sub"))
        if user is None:
            raise HTTPException(status_code=401, detail="Invalid user")
        return user
    except JWTException:
        raise HTTPException(status_code=401, detail="Could not validate credentials")

@router.get("/protected")
async def protected_route(user: SUser = Depends(get_current_user)):
    return {"message": "Hello, {}".format(user.email)}