# Stage 1: Build the project
FROM node:22 AS build

WORKDIR /src
COPY . .
RUN yarn install
RUN yarn run build

# Stage 2: Production image
FROM node:22-slim

WORKDIR /src
COPY --from=build /src/.output ./.output

ARG GIT_REV=dev
ENV NUXT_PUBLIC_VERSION=$GIT_REV
ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
