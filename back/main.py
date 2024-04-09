from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from back.User.router import router as router_users
from back.SystemRole.router import router as router_roles
from back.Event.router import router as router_events
from back.StudentOrganization.router import router as router_student_org

app = FastAPI(
    title="SEMS"
)

app.include_router(router_roles)
app.include_router(router_users)
app.include_router(router_events)
app.include_router(router_student_org)

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)