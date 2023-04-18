FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGODB_URI mongodb://172.17.0.2:27017/mydatabase

CMD ["npm", "start"]
