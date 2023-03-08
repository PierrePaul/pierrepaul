FROM node:16

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN yarn 
RUN yarn run build
RUN yarn run generate

ENV HOST 0.0.0.0
EXPOSE 3000

CMD yarn run start
