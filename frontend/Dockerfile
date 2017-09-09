# Dockerfile
FROM node:6

# Create app directory
RUN mkdir -p /src
WORKDIR /src

# Install app dependencies
COPY ./package.json /src/
RUN npm install

# Bundle app source
COPY src/. /src
COPY public/. /src/public

# Build and optimize react app
RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]
