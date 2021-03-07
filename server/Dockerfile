FROM node:latest

ENV PATH ./app/node_modules/.bin:$PATH

RUN mkdir -p /home/app

<<<<<<< HEAD:ui/DockerFile
COPY ./app /home/app
=======
COPY ./backend /home/backend
>>>>>>> Server:server/Dockerfile

# set default dir so that next commands executes in /home/app dir
WORKDIR /home/app

# will execute npm install in /home/app because of WORKDIR
RUN npm install --silent

# no need for /home/app/server.js because of WORKDIR
<<<<<<< HEAD:ui/DockerFile
CMD ["npm", "start"]
=======
CMD ["node", "server.js"]

>>>>>>> Server:server/Dockerfile
