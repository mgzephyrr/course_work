import os
import uuid
from fastapi import File, HTTPException
from PIL import Image

from back.config import settings


async def upload_image(file: File):
    if not file.filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        raise HTTPException(
            status_code=400, detail="Only JPEG, JPG and PNG files are allowed")

    if file.size > settings.MAX_FILE_SIZE_BYTES:
        raise HTTPException(
            status_code=400, detail="File size too large. Maximum size is 1 megabyte.")

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
        raise HTTPException(
            status_code=400, detail="Uploaded file is not a valid JPEG image")

    return (file)
