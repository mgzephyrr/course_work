from datetime import timedelta
import re
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import JWTException
from jose import jwt
import os
import uuid
from PIL import Image
from fastapi.responses import FileResponse

from back.Token.schemas import Token
from back.User.schemas import SUser, SUserCreate
from back import auth
from back.config import settings
from back import crud
router = APIRouter(
    prefix = "/auth",
    tags= ["Аутентификация", "Работа с пользователем"]
)

email_regex = r'^[a-zA-Z0-9_.+-]+@edu\.hse\.ru$' or r'^[a-zA-Z0-9_.+-]+@hse\.ru$'

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


@router.post("/signup")
async def create_user(user: SUserCreate, system_role_id: int = 3) -> SUser:
    if re.match(email_regex, user.email):
        # !!!!!!!!! Если почта заканчивается на @edu.hse.ru то выдать роль student
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
    print(from_data)
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

@router.post("/createavatar")
async def create_upload_file(file: UploadFile = File(...), user: SUser = Depends(get_current_user)):
    if not file.filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        raise HTTPException(status_code=400, detail="Only JPEG, JPG and PNG files are allowed")
    
    if file.size > settings.MAX_FILE_SIZE_BYTES:
        raise HTTPException(status_code=400, detail="File size too large. Maximum size is 1 megabyte.")
    
    file.filename = f"{uuid.uuid4()}.jpg"
    contents = await file.read()
    
    with open(f"{settings.IMAGEDIR}{file.filename}", "wb") as f:
        f.write(contents)
    
    # Дополнительная проверка на валидность изображения
    try:
        image = Image.open(f"{settings.IMAGEDIR}{file.filename}")
        image.verify()  # Проверка на валидность изображения
        image.close()
    except Exception as e:
        os.remove(f"{settings.IMAGEDIR}{file.filename}")
        raise HTTPException(status_code=400, detail="Uploaded file is not a valid JPEG image")
    
    return await crud.add_avatar_to_current_user(file_name=file.filename, user_id=user.id)

@router.get("/myavatar")
async def load_current_user_avatar(user: SUser = Depends(get_current_user)) -> FileResponse:
    file_name = await crud.load_user_avatar(user.id)
    file_path = f"{settings.IMAGEDIR}{file_name}"
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    
    return FileResponse(file_path)

@router.get("/avatar/{user_id}")
async def load_user_avatar_by_id(user_id: int) -> FileResponse:
    file_name = await crud.load_user_avatar(user_id=user_id)
    file_path = f"{settings.IMAGEDIR}{file_name}"
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    
    return FileResponse(file_path)