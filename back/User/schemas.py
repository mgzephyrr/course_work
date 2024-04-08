from pydantic import BaseModel

class SUserBase(BaseModel):
    first_name: str
    last_name: str
    paternity: str
    email: str

class SUserCreate(SUserBase):
    hashed_password: str

class SUserAuth(BaseModel):
    email: str
    password: str

class SUser(SUserBase):
    id: int
    system_role_id: int = 3

    class Config:
        orm_mode = True