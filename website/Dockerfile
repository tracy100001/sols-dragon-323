FROM node:20

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile --prod

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start", "-p", "3000", "-H", "0.0.0.0"]
