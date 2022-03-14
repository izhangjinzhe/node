FROM node:latest
RUN mkdir -p /home/project
WORKDIR /home/project
COPY . /home/project
EXPOSE 3000
CMD npm install && cross-env NODE_ENV=prod nodemon --experimental-specifier-resolution=node src/index --exec babel-node --inspect src/index.js
