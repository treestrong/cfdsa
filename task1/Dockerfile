ARG NODE_VER=17

FROM node:${NODE_VER} AS Builder

ARG APP_DIR=/app 

### cd into APP_DIR
WORKDIR ${APP_DIR}

#ADD main.js .
#ADD package.json .

###ADD directory content
#ADD public public
#ADD views views

### copy files from host into container
ADD . .

RUN npm i

### run

ENV APP_PORT=5000 INSTANCE_NAME="dov-go-bear" INSTANCE_HASH="hash-abcd"

EXPOSE ${APP_PORT}

ENTRYPOINT ["node","main.js"]
