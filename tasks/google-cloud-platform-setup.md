# Task 2: Google Cloud Platform

### 2.1 Create a project
Log in to [google cloud](https://console.cloud.google.com/) and create a project.  

We need to create a project for our 


### 2.2 Create a cluster
We need a cluster where we want to run our application. Create a cluster: 

 https://cloud.google.com/sdk/gcloud/reference/container/clusters/create
 
LINE: Skal vi skrive ned alle stegene for å sette opp cluster her?
Kanksje lurt med tanke på egen access to database
 
### 2.3 Setup a MySQL-database

(LINE)



### 2.X (TODO) Setup an external IP
We need an external IP to reach our application.
Set up an external IP that we will use to connect to the frontend of your application. 

**Reserve an external IP address**

1) Go to `VPC Network`
2) Select `External IP Addresses`
3) Choose `Reserve Static IP Address`
4) Choose a name for your address
5) Set *attached to* to point to the cluster you created in Task 1.2. 


### 2. (TODO) Check the cluster is working
Check the status of your cluster 