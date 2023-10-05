# Dockerfile

FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app  # Change working directory to /app

COPY requirements.txt /app/
RUN pip install -r requirements.txt

COPY . .

# Copy the SQLite database file from the project root to the Docker image
COPY db.sqlite3 /app/db.sqlite3

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
