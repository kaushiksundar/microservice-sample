FROM node:8.11.1-alpine

LABEL maintainer="robertoachar@gmail.com"

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

RUN npm i -g nodemon

ENV NODE_ENV=development
ENV PORT=8000
ENV HEROES=http://heroes:3001/api/heroes
ENV MOVIES=http://movies:3002/api/movies
ENV PYTHON_LIBS=http://python_libs:5000/api/python_libs

EXPOSE 8000

CMD [ "nodemon", "-L", "src/index.js"]
