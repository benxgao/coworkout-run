FROM node:alpine3.16 AS base
RUN apk add --no-cache npm
WORKDIR /root/app
COPY package.json .

FROM base AS dependencies
RUN npm set progress=false && npm config set depth 0
RUN npm i --only-production
RUN cp -R node_modules prod_node_modules
RUN npm i

# FROM dependencies AS test
# COPY . .
# RUN npm run test

# echo "MONGO_HOST=${{ vars.MONGO_HOST }}" >> ./.env
# echo "MONGO_USERNAME=${{ vars.MONGO_USERNAME }}" >> ./.env
# echo "MONGO_PASSWORD=${{ secrets.MONGO_PASSWORD }}" >> ./.env

FROM dependencies AS final

ARG MYSECRET
ARG MONGO_HOST
ARG MONGO_USERNAME
ARG MONGO_PASSWORD
ARG NODE_ENV=production

ENV MYSECRET "${MYSECRET}"
ENV MONGO_HOST "${MONGO_HOST}"
ENV MONGO_USERNAME "${MONGO_USERNAME}"
ENV MONGO_PASSWORD "${MONGO_PASSWORD}"
ENV NODE_ENV $NODE_ENV

COPY --from=dependencies /root/app/prod_node_modules ./node_modules
COPY . .
# RUN npm run build

EXPOSE 8080

# docker run --entrypoint npm run start
# docker exec coworkout:v1 ps -eo pid,ppid,user,args --sort pid
# /bin/sh -c npm run build
# /usr/local/bin/npm
# ENTRYPOINT [ "/bin/sh", "-c", "npm", "run", "serve"]

CMD [ "npx", "forever", "express_server.js"]
