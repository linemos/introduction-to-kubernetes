# Task 4: Build docker images
We want to build docker images to run in the cloud.
The docker images store the information about the server so that it could be ran on any server. 


### Build your docker images

Building a docker image is done from the terminal in the folder where you have a file called `Dockerfile`.
The Dockerfile contains information about what you need to run your code, for instance does our backend application need java to build the and run the application.

**1. Build your docker image**
 
```
docker build .
```
This builds a docker images from the current folder. 

The output of your build should end with something like this
```

```

**2. Tag your image**
We should add a tag to our image so that it is easier to recognize each of our docker images. 

```
``` 

**3. Build and tag in one command**
It is also possible to build and tag our image in one command. This is done like this: 

```
docker build -t [TAG_NAME] .
```
We recommend tagging your project liks this: `us.gcr.io/[project_name]/[build_name]:[version]`
where you insert your *project_name*, *build_name* and *version*. 

The version is useful to separate different builds from each other and to create specific versions for test or prod.

We recommend this tagging because it will make it easier to push your application to Google Cloud.  


### Run the docker container locally



### Delete Docker Images

