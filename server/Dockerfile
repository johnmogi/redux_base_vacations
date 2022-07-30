FROM node:lts-alpine3.16

LABEL maintainer="john mogi AT johnmogi.com"

WORKDIR /usr/server

COPY ./package*.json ./

RUN npm install

COPY . ./

ENV port=3000
EXPOSE 3000

CMD ["node", "app.js"]