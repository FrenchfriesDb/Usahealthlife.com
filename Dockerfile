FROM python:3.9-slim

WORKDIR /app

COPY . /app

EXPOSE 8000

CMD ["python3", "-m", "http.server", "8000"]
