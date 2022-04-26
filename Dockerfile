FROM node:16 as builder
WORKDIR ./app
COPY . .
RUN yarn install --registry=https://registry.npmmirror.com/ && yarn build

EXPOSE 8081
CMD ["node", "dist/server.js"]
