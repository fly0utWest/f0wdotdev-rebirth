FROM node:lts AS runtime

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

COPY . .

RUN pnpm build

ENV PORT=4321
EXPOSE ${PORT}

CMD ["node", "./dist/server/entry.mjs"]