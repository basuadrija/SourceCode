# Dockerfile
FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install

ARG SERVICE_FILE
COPY ${SERVICE_FILE} ./app.js

CMD ["node", "app.js"]
