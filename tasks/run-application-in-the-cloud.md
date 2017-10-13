# Task 5: Run application in the cloud

We need to create docker images of our application and store the built docker images in the Container Registry. 
Then we need to create deployments to Google Cloud. 

Up to this point we have used the Google Cloud Console in the browser.
Now we will interact with Google Cloud by using the command line tool `gcloud`
in the terminal shell on our machines.
The command line tool and the interface in your browser does the same tings, most of the time.

## 5.1 Set project in gcloud
We need to set our new project as default in gcloud.
List all your configs by typing: 

```
gcloud config list 
```
This should output something like this: 
```
[compute]
region = us-central1
zone = us-central1-a
[core]
account = ingrid@vibbio.com
disable_usage_reporting = False
project = myproject
```
If your newly created project is not listed under project, do the following command:
```
gcloud config set project [YOUR_NEW_PROJECT_ID]
```
Remember to use the project ID and not the project name of your newly created project.


## 5.2 Check the status of your cluster from gcloud

Check that your cluster is running and reached by gcloud, by typing: 

```
gcloud container clusters list
```

This should output something like this: 

```
NAME                 ZONE           MASTER_VERSION  MASTER_IP      MACHINE_TYPE   NODE_VERSION  NUM_NODES  STATUS
cv-cluster          us-central1-a  1.6.7           23.251.148.43  n1-standard-2  1.6.7         3          RUNNING
```


## 5.3 Docker Images in the cloud

### 5.3.1 Push your Docker Images to the cloud
We push docker images to Google Cloud by using `gcloud`. Remember we recommended tagging your images with `gcloud docker -- push us.gcr.io/[project_name]/[build_name]:[version]`?
To push your docker image to the cloud, write the following command:  

```
gcloud docker -- push us.gcr.io/[project_name]/[build_name]:[version]
```

This adds your docker images to the Container Registry in Google Cloud to your project with the current project name and under the folder called [build_name].

### 5.3.2 View your images in the cloud

Log in to Google Cloud and go to *Container Registry*.
You should see your new build successfully uploaded under the correct build name.   
You can add additional tags to your build by pressing the edit button under the "tags" column. 


## 5.4 Release the application

Before we start deploying our application we need to specify what cluster we want to deploy our application to.
We do this using this command:
```
gcloud container clusters get-credentials cv-cluster
```

To deploy the application we need to create a service for both the backend and the frontend.
We will also need deployments. The deployments will create pods that run our docker images containing our applications.
The service will receive requests and direct them to its pods.

### 5.4.1 Backend
1. Open the file *kubernetes-deployment/backend/deployment.yaml*
2. Insert your docker backend tag in the field **image:**
3. Deploy our backend to Google Cloud Container Engine:
```
kubectl create -f kubernetes-deployment/backend/service.yaml
kubectl create --save-config=true -f kubernetes-deployment/backend/deployment.yaml
```

### 5.4.2 Frontend

**Set external IP address**

Before we deploy the frontend, we need to insert the external IP address we created earlier.
1. We can view our external IP address by typing the command:

```
gcloud compute addresses list
```

2. Copy the IP address and paste it in the field **loadBalancerIp: ** in the file *kubernetes-deployment/frontend/service.yaml*.
3. Open the file *kubernetes-deployment/frontend/deployment.yaml*
4. Insert your docker frontend tag in the field **image:**. Remember to also specify the version.
5. Deploy our frontend to Google Cloud Container Engine:

```
kubectl create -f kubernetes-deployment/frontend/service.yaml
kubectl create --save-config=true -f kubernetes-deployment/frontend/deployment.yaml
```

### 5.4.3 Status of the cloud
Check that the cluster is up and running, without any error status. We will use kubernetes commands for this:

**View all pods**

`kubectl get pods`

**View status of deployments**

`kubectl get deployments`

**View status of service**

`kubectl get services`
If the external IP of the frontend service is pending, wait for a couple of minutes and check again.

**View errors**

If you get any errors, you can look at the logs of a pod with the following command: 
```
kubectl logs [PODNAME]
```

### 5.4.4 View your application
When all pods, deployments and services are running, paste the external IP adress in your browser to take a look at your awesome CV!

## Additional information
**Locating the backend**

The frontend can't run the development server in the cloud as we did locally.
In the cloud we will run a separate server that is located under */frontend/index.js*. 
This file will start an express server that hosts our client code. 

When building the docker image for our frontend client, we run *npm run build*.
This will bundle the client code in order for our frontend-server to host the code. 

Notice that our frontend server (frontend/index.js) needs to know where to find the backend. 
This is done through environment variables that are automatically set by Kubernetes.

All pods within a cluster know where to find the other services in the cluster.
By default, our frontend pod can access our backend service.   

**Find all environment variables**

View all pods in our cluster (we assume your backend pods is up and running):
```
kubectl get pods
```

We can view all environment variables for a pod by typing: 
```
kubectl exec -it [FRONTEND_POD_NAME] -- printenv
```

Notice that we can find the address of our backend and its port under **CV_APP_BACKEND_SERVICE_PORT**. 
This environment variable is used inside our service, and if the IP address will change, so will the environment variable.  

