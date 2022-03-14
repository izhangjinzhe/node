FROM node:latest
WORKDIR ./app
COPY package.json ./
RUN npm i --registry=https://registry.npm.taobao.org
COPY . ./app
EXPOSE 3000
CMD npm install && cross-env NODE_ENV=prod nodemon --experimental-specifier-resolution=node src/index --exec babel-node --inspect src/index.js
