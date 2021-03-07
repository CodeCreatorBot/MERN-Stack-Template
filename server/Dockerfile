
FROM node:latest

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /home/backend

COPY ./backend /home/backend

# set default dir so that next commands executes in /home/app dir
WORKDIR /home/backend

# will execute npm install in /home/app because of WORKDIR
RUN npm install

# no need for /home/app/server.js because of WORKDIR
CMD ["node", "server.js"]
