# Build docker images
We want to build docker images to run in the cloud.
The docker images store the information about the server. 


### Build your docker images

**1. Build your docker image**
 
```
docker build -t us.gcr.io/[project_name]/[build_name]:[version] .
```
This builds a docker images from the current folder, and adds the tag `us.gcr.io/[project_name]/[build_name]:[version]`
Insert your *project_name*, *build_name* and *version*. 
The version is useful to separate different builds from each other and to create specific versions for test or prod. 

**2. Push docker images to cloud**
```
gcloud docker -- push us.gcr.io/[project_name]/[build_name]:[version]
```
This adds your docker images to the Container Registry in Google Cloud and makes it available for your cluster. 

**3. View your image**

Log in to Google Cloud and go to *Container Registry*. You should see your new build successfully uploaded under the correct build name.   

### Run the docker container locally
