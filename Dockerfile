FROM node:alpine


WORKDIR /angular-docker

COPY /angular-docker/package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY angular-docker/ .

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4300"]