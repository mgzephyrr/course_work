from datetime import timedelta
import re
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile, Response, Cookie
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import JWTException
from jose import jwt
import os
import uuid
from PIL import Image
from fastapi.responses import FileResponse

from back.User.depnds import get_current_user
from back.Token.schemas import Token
from back.User.models import User
from back.User.schemas import SUser, SUserCreate
from back.images_upload.repo import upload_image
from back import auth
from back.config import settings
from back import crud
router = APIRouter(
    prefix = "/auth",
    tags= ["Аутентификация", "Работа с пользователем"]
)

email_regex = r"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"

@router.post("/signup")
async def create_user(user: SUserCreate) -> SUser:
    if re.match(email_regex, user.email):
        system_role_id = None
        if user.email.endswith("@edu.hse.ru"):
            system_role_id = 5
        elif user.email.endswith("@hse.ru"):
            system_role_id = 6
        else:
            system_role_id = 3

        db_role = await crud.get_system_role(system_role_id=system_role_id)
        if not db_role:
            raise HTTPException(status_code=400, detail="Role does not exist")

        db_user = await crud.get_user_by_email(email=user.email)
        if db_user:
            raise HTTPException(status_code=400, detail="Email already in use")

        return await crud.create_user(user=user, system_role_id=system_role_id)
    else:
        raise HTTPException(status_code=400, detail="Invalid email format")

@router.post("/login", response_model=Token)
async def login_for_access_token(response: Response, from_data: OAuth2PasswordRequestForm = Depends()):
    print(from_data)
    db_user = await crud.get_user_by_email(email=from_data.username)
    if not db_user or not auth.verify_password(from_data.password, db_user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": db_user.email}, expires_delta=access_token_expires
    )
    response.set_cookie(key="Authorization", value= access_token, httponly=False)
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/logout")
async def logout(response: Response):
    response.delete_cookie("Authorization")
    return {"message": "Successfully logged out"}

@router.get("/me")
async def protected_route(user: User = Depends(get_current_user)):
    return user

@router.post("/createavatar")
async def create_upload_file(file: UploadFile = File(...), user: SUser = Depends(get_current_user)):
    newFile = await upload_image(file)
    return await crud.add_avatar_to_current_user(file_name=newFile.filename, user_id=user.id)

@router.get("/myavatar")
async def load_current_user_avatar(user: SUser = Depends(get_current_user)) -> FileResponse:
    file_name = await crud.load_user_avatar(user.id)
    file_path = f"{settings.IMAGEDIR}{file_name}"
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    
    return FileResponse(file_path)

@router.get("/{user_id}/avatar")
async def load_user_avatar_by_id(user_id: int) -> FileResponse:
    file_name = await crud.load_user_avatar(user_id=user_id)
    file_path = f"{settings.IMAGEDIR}{file_name}"
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    
    return FileResponse(file_path)