FROM node:lts-alpine3.16

LABEL maintainer="john mogi AT johnmogi.com"

WORKDIR /usr/server

COPY ./package*.json ./

RUN npm install

COPY . ./

ENV port=3306
EXPOSE 3306

CMD ["npm", "run", "start"]