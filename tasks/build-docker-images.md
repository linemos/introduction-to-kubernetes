# Task 4: Build docker images
We want to build docker images to run in the cloud.
The docker images store the information about the server so that it could be ran on any server. 


## 4.1 Build your docker images

Building a docker image is done from the terminal in the folder where you have a file called `Dockerfile`.
The Dockerfile contains information about what you need to run your code, for instance does our backend application need java to build the and run the application.

### 4.1.1 Build your docker image
 
```
docker build .
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

### 4.1.3 Build and tag in one command
It is also possible to build and tag our image in one command. This is done like this: 

```
docker build -t [TAG_NAME] .
```
We recommend tagging your project like this: `us.gcr.io/[project_name]/[build_name]:[version]`
where you insert your *project_name*, *build_name* and *version*.
This tagging is recommended because it will make it easier to push your application to Google Cloud.  


We recommend these build-names: 
1. Backend: cv-backend
2. Frontend: cv-frontend


The version is useful to separate different builds from each other and to create specific versions for test or prod.

## 4.2 Run the docker container locally

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