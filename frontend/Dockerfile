# Dockerfile
FROM node:6


RUN mkdir -p /usr/client
WORKDIR /usr/client

# Copy all code (except node_modules)
COPY ./client/src/. /usr/client/src/
COPY ./client/public/. /usr/client/public/
COPY ./client/package.json /usr/client/


RUN npm install # To run silently, without output to terminal, add --silent

# Bundle app
RUN npm run build



# Set workdir to server
WORKDIR /usr

# Install app dependencies
COPY ./package.json /usr/
COPY ./index.js /usr/

# Run server
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
