FROM node:lts

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN yarn add nuxt-i18n
RUN yarn install
RUN yarn run build

ENV HOST 0.0.0.0

CMD yarn run start
