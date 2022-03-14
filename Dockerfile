FROM node:latest
COPY package.json /home/project/
WORKDIR /home/project
RUN npm i --registry=https://registry.npm.taobao.org
COPY . /home/project
EXPOSE 3000
CMD cross-env NODE_ENV=prod nodemon --experimental-specifier-resolution=node src/index --exec babel-node --inspect src/index.js
