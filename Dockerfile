FROM node:18-alpine3.17

WORKDIR /dextra

COPY . .

RUN npm install -g pnpm

RUN pnpm install

ENV PORT=6006

EXPOSE 6006

CMD ["pnpm", "dev:components"]