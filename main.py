
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import PlainTextResponse, FileResponse
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import secrets
import string
import html

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def read_root():
    return FileResponse("templates/index.html")


@app.post("/api/generate-key/{length}", response_class=PlainTextResponse)
def generate_key(length: int):
    key = "".join(secrets.choice(string.digits + string.ascii_letters + string.punctuation) for i in range(length))
    print(key)
    safe_key = html.escape(key)
    return safe_key

