FROM node:19.9.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY ./src ./src

EXPOSE 8080
CMD npm start