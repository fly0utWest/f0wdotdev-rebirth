FROM ghcr.io/muchobien/pocketbase:latest

ENTRYPOINT ["/bin/sh", "-c", "pocketbase migrate up && pocketbase superuser upsert $PB_EMAIL $PB_PASSWORD &&  pocketbase serve --http=0.0.0.0:$PB_PORT"]
