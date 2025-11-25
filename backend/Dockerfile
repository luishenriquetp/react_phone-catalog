FROM postgres:latest

ENV POSTGRES_USER=dev
ENV POSTGRES_PASSWORD=nopassword
ENV POSTGRES_DB=dbdev

COPY backup.sql /docker-entrypoint-initdb.d/

EXPOSE 5432