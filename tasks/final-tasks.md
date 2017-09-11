# Final tasks

We don't want you to pay for your application after finishing the workshop.
Here are some tasks to complete to delete everything we have done and prevent paying for your application. 

Only Google Cloud will cost money, so deleting Docker Images is not necessary. 

If you want to keep your application in the cloud, skip step 1 and 2, instead look at step 3. 

## 1. Clean up your application
If you don't want to be charged, you will have to clean up and destroy your application and cluster. 

**Destroying the database**

1. Go to [your console](https://console.cloud.google.com/)
2. Select SQL in the menu
3. Click on the name of your database (`cvapp-db`)
4. Click *delete*.

**Delete your External IP address**

1. Go to [your console](https://console.cloud.google.com/)
2. Go to *VPC Network*
3. Choose External IP Addresses
4. Select *change* on your IP address
5. Choose Attach to *None*
6. Select the IP Address and click **Release Static IP Address**
 
**Delete your backend and frontend docker images**

1. Go to [your console](https://console.cloud.google.com/)
2. Go to *Container Registry*
3. Go into each folder and delete all docker images

**Delete your deployments**

List all your deployments: 
```
kubectl get deployments
```

Write the following command
```
kubectl delete deployments [deployment_1] [deployment_2]
```

**Delete your services**

List all your services: 
```
kubectl get services
```

Write the following command
```
kubectl delete services [service_1] [service_2]
```

**Deleting your cluster**

1. Go to [your console](https://console.cloud.google.com/)
2. Select *Container Engine*
3. Select *Container clusters*
4. Select your cluster and click delete

**Delete your project**

1. Go to [your console](https://console.cloud.google.com/)
2. Go to *IAM & Admin*
3. Select *Settings* in the menu on the left
4. Choose your project and click *Shut down*

**Turn off billing**

1. Go to [your console](https://console.cloud.google.com/)
2. Go to *Billing*
3. Click *Close billing account*

#### You should now be safe from receiving any invoices.  

## 2. Stop Docker

### Delete Docker Images

You might want to delete your docker images. List all docker images by typing: 
```
docker images
```

Delete an image by typing: 
```
docker rmi [image tag number]
```

### Stop running Docker 

To stop Docker from running after we have finished the workshop.

**Mac/Windos**
This is done by either clicking on the Docker-icon on your toolbar and clicking "Quit Docker".

**Linux**
Stop Docker by typing `CTRL-C` in the terminal where Docker is running. 
It will also stop when you shut down your computer.  

## 3. Keep your application in the cloud

If you want to keep your CV in the cloud, you should create a domain for your application. 
You can easily buy your own domain from different domain providers. 

After you have bought your domain, you should setup DNS settings to point to your application. 
You will then need the external IP you have reserved in Google Cloud. 

You have been given a certain amount of credits.
Your application is free of charge the first 100 days as long as you don't use more than the credits you have been given. 

**To view pricing of your application** 

1. Go to *Billing*. You can view number of credits left on this page. 
2. Choose *Billing account overview*
3. Select your project name

You should now get a detailed description of your charges so far. 

To estimate cost of projects, visit: https://cloud.google.com/products/calculator/ 