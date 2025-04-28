FROM ghcr.io/muchobien/pocketbase:latest

WORKDIR /app

ENV PB_PORT=4321

EXPOSE ${PB_PORT}

ENTRYPOINT ["/bin/sh", "-c", "pocketbase migrate up && pocketbase superuser upsert $PB_EMAIL $PB_PASSWORD && pocketbase serve --http=0.0.0.0:$PB_PORT"]
