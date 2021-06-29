FROM node:14

RUN mkdir /app
WORKDIR /app

COPY package.json ./
COPY yarn.lock /app/yarn.lock

RUN yarn install --frozen-lockfile

COPY . .

ENV NODE_ENV=production

RUN yarn build

CMD ["yarn", "start"]