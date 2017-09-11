# Task 4: Build docker images
We want to build docker images to run in the cloud.
The docker images store the information about the server so that it could be ran on any server. 


## 4.1 Build your docker images

Building a docker image is done from the terminal in the folder where you have a file called `Dockerfile`.
The Dockerfile contains information about what you need to run your code, for instance does our backend application need java to build the and run the application.

### 4.1.1 Build your docker image
 
```
docker build frontend/.
```
This builds a docker images from the current folder. 

The output of your build should end with something like this
```
Successfully built 70f8cadfac47
```

### 4.1.2 Tag your image
We should add a tag to our image so that it is easier to recognize each of our docker images. 

List all docker images
```
docker images
```
Then add a tag to the build 
```
docker tag 70f8cadfac47 cv-frontend:0.1.0
``` 

We recommend the build name `cv-frontend`

### 4.1.3 Build and tag in one command
It is also possible to build and tag our image in one command. We will do this when we build the backend: 

```
docker build -t [TAG_NAME] backend/.
```

We recommend tagging your project like this: `us.gcr.io/[project_name]/[build_name]:[version]`
where you insert your *project_name*, *build_name* and *version*.
We recommend the build name `cv-backend`

This tagging is recommended because it will make it easier to push your application to Google Cloud.

The version is useful to separate different builds from each other and to create specific versions for test or prod.

## 4.2 Run the docker container locally [OPTIONAL]

It is useful to try to run your application locally with docker images, but it is not necessary.
We recommend skipping this task for now and do it after you have deployed your application to the cloud :blush:

**Stop frontend and backend**

First, stop both backend and frontend that you started in task 3 (stop them by typing `CTRL-C` in the terminal where you started them). 

**List all docker images**

Then we need to find out what images to run.
List all docker images by typing:

```
docker images
```

This should give a list of all docker images like this: 

```
REPOSITORY                                  TAG                 IMAGE ID            CREATED             SIZE
<none>                                       <none>              7d26b69af449        15 hours ago        849MB
us.gcr.io/myawesomeprojectname/cv-frontend   0.1.0               feaa284c1dea        6 days ago          421MB
us.gcr.io/myawesomeprojectname/cv-frontend   0.1.0               feaa284c1dea        6 days ago          421MB
us.gcr.io/myawesomeprojectname/cv-frontend   <none>              c91f40841352        6 days ago          421MB
us.gcr.io/myawesomeprojectname/cv-backend    0.1.0               b74ed7159f36        6 days ago          721MB
us.gcr.io/myawesomeprojectname/cv-backend    <none>              f535acc5f172        6 days ago          721MB
```

**Find the latest frontend and backend build**

Run a docker image by using its ID: 

```
docker run -i -t feaa284c1dea
```

You can also run the docker image with the name you have chosen: 

```
docker run -i -t us.gcr.io/myawesomeprojectname/cv-frontend:0.1.0
```

**Stop docker container**

List all running docker containers by typing: 

```
docker ps -a
``` 

This should output something like this: 

```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                          PORTS               NAMES
929f0e9c8f22        afa2e563a40a        "/bin/sh -c 'npm r..."   6 seconds ago       Up 4 seconds                                        laughing_stallman
334a22f7f3c6        57302c476b54        "npm start"              52 seconds ago      Exited (0) 6 seconds ago                            jovial_poincare
182f284f31ab        04d2de9d5694        "npm start"              8 minutes ago       Exited (0) About a minute ago                       competent_lamport
92a3a7fac67a        04d2de9d5694        "npm start"              9 minutes ago       Exited (0) 8 minutes ago                            focused_kowalevski
```

Stopping a docker container is done by typing: 
```
docker stop [container_id]
```

## 4.2.1 Run docker images and access the running container 

We need to get access to the port you are running your docker image on so that we can access the result. 

For the frontend, find the docker image ID and run the following command: 

```
docker run -d -p 3000:3000 [DOCKER_IMAGE_ID]
```


For the backend, find the docker image ID and run the following command: 

```
docker run -d -p 5000:5000 [DOCKER_IMAGE_ID]
```

Open a tab in your browser and access your application with `localhost:3000`.