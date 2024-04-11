from datetime import datetime, timezone
from fastapi import Depends, HTTPException, Request, status
from jose import jwt, JWTError
from jwt.exceptions import JWTException

from back import crud
from back.config import settings


def get_token(request: Request):
    token = request.cookies.get("Authorization")
    if not token:
        raise HTTPException(status_code=401, detail="Token absent")
    return token

async def get_current_user(token: str = Depends(get_token)):
    print(token)
<<<<<<< HEAD
    print('111111111111111')
=======
>>>>>>> 941126ab4916fe34cbab3d92ada2d3a37e9e9279
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
