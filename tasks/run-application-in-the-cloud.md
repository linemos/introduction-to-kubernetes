# Task 5: Run application in the cloud

We need to create docker images of our application and store the built docker images in the Container Registry. 
Then we need to create deployments to Google Cloud. 

## 5.1 Docker Images in the cloud

### 5.1.1 Push your Docker Images to the cloud
We push docker images to Google Cloud by using `gcloud`. Remember we recommended tagging your images with `gcloud docker -- push us.gcr.io/[project_name]/[build_name]:[version]`?
To push your docker image to the cloud, write the following command:  

```
gcloud docker -- push us.gcr.io/[project_name]/[build_name]:[version]
```

This adds your docker images to the Container Registry in Google Cloud to your project with the current project name and under the folder called [build_name].

### 5.1.2 View your images in the cloud

Log in to Google Cloud and go to *Container Registry*.
You should see your new build successfully uploaded under the correct build name.   
You can add additional tags to your build by pressing the edit button under the "tags" column. 



### X.X (TODO) Release Application

We need to create a 

#### Backend

#### Frontend

Check that your application is online by 




## Status of the cloud
Check that the cluster is up and running. 

**View all pods**
`kubectl get pods`

**View status of deployments**
`kubectl get deployments [deployment-name]`

**View status of service**
`kubectl get services [service-name]`

