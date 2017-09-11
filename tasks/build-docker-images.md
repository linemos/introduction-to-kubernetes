# Task 4: Build docker images
We want to build docker images to run in the cloud.
The docker images store the information about the server so that it could be ran on any server. 


## 4.1 Build your docker images

Building a docker image is done from the terminal in the folder where you have a file called `Dockerfile`.
The Dockerfile contains information about what you need to run your code, for instance does our backend application need java to build the and run the application.

### 4.1.1 Build your docker image
Navigate to the folder *frontend*. Then run:
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
Then add a tag to the build, just replace the \[project_id\] with your project id:
```
docker tag 70f8cadfac47 us.gcr.io/[project_id]/cv-frontend:0.1.0
``` 

### 4.1.3 Build and tag in one command
It is also possible to build and tag our image in one command. Navigate to the folder named *backend*.

```
docker build -t us.gcr.io/[project_id]/cv-backend:0.1.0 .
```

This tagging is recommended because it will make it easier to push your application to Google Cloud.

The version is useful to separate different builds from each other and to create specific versions for test or prod.