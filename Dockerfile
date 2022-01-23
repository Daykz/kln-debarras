FROM node:14-alpine AS BUILD_IMAGE

WORKDIR /app

RUN apk update && apk add curl bash

COPY ./package.json ./

COPY . .

RUN yarn install --frozen-lockfile

RUN yarn build

RUN yarn install --frozen-lockfile --production

FROM node:14-alpine

WORKDIR /app

COPY --from=BUILD_IMAGE /app /app

EXPOSE 2000

CMD [ "yarn", "start" ]
