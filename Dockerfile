FROM python:3.9.7-alpine3.14
WORKDIR /app

COPY src/requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY src/flaskr/ .
CMD python server.py

EXPOSE 8000/tcp