# fly0utwest.dev

source code for my bonfire on the internet

finally with somewhat nice stack xd

to create .env file with default values, run:

```bash
cp .env.example .env
````

### pocketbase

to start pocketbase server, run:

```bash
docker compose -f compose.dev.yaml up --build -d pocketbase
````

then, go to localhost:8090/\_ by default and login by credentials in env to view dashboard and fill the db

### astro dev server

```bash
pnpm i
pnpm dev
```

or, if you'd like to launch both services in docker, run

```bash
docker compose -f compose.dev.yaml up --build -d
```

or, astro only:

```bash
docker compose -f compose.dev.yaml up --build -d astro
```

