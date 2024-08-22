FROM node:alpine as base

WORKDIR /app

COPY package*.json .

RUN rm -rf node_modules

RUN npm install --no-save

COPY . .

CMD ["node", "index.js"]

EXPOSE 3000
