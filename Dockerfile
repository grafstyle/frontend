FROM node:14-alpine AS build

RUN mkdir -p /app/actuality/

WORKDIR  /app/actuality/

COPY package.json .

COPY package-lock.json .

RUN npm install --force

COPY . .

RUN npm run build --force


## Stage 2: Run ###

FROM nginx:1.17.1-alpine AS prod-stage
COPY --from=build /app/actuality/src /usr/share/nginx/html
COPY --from=build /app/actuality/dist/actuality /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
