FROM node:14

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY src ./src

CMD ["yarn", "start"]