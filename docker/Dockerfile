FROM node:20-alpine3.19

WORKDIR /app

RUN yarn set version stable \
 && apk update && apk upgrade && apk add git openssh \
 && npm install -g npm@latest

COPY package.json /app
COPY yarn.lock /app

RUN yarn install
