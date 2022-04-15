FROM node:12
WORKDIR /app
COPY . .
RUN yarn install  --registry=https://registry.npm.taobao.org && yarn build

EXPOSE 10000

CMD ['node', 'dist/server.js']

