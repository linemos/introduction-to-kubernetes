# Dockerfile
FROM node:6

# Create app directory
RUN mkdir -p /usr
WORKDIR /usr

# Install app dependencies
COPY ./package.json /usr/
RUN npm install

# Bundle app source
COPY src/. /usr/src/
COPY public/. /usr/public

EXPOSE 3000

CMD [ "npm", "build" ]
