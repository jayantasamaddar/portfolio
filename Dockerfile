FROM node:lts-slim
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "start"]
