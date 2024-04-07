from fastapi import FastAPI
from back.User.router import router as router_users
from back.SystemRole.router import router as router_roles
from back.Event.router import router as router_events

app = FastAPI(
    title="SEMS"
)

app.include_router(router_roles)
app.include_router(router_users)
app.include_router(router_events)
