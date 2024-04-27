FROM node:20.10.0-alpine3.19 AS build
WORKDIR /build
COPY ./package*.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]
