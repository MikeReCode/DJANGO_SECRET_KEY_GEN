FROM python:3.12-alpine

ENV PYTHONUNBUFFERED 1
WORKDIR /app

COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt && \
    rm requirements.txt

COPY /templates/. /app/templates
COPY /static/. /app/static
COPY main.py /app/