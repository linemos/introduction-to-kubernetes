# Task 2: Google Cloud Platform

## 2.1 Create a project
Log in to [google cloud](https://console.cloud.google.com/) and create a project.
Wait for the API and related services to be enabled. This can take several minutes.
Enable billing for your project.
You will have 100 free days for your account and should not be charged for the workshop. 


## 2.2 Create a cluster
We need a cluster where we want to run our application.
Create a cluster by navigating to the menu on the left in Google Cloud Console, 
scroll down to Compute.

1. Select Container Engine and then Container clusters. Click `Create cluster`.
2. Name your cluster `cv-cluster`.
3. Choose a zone starting with *us-central1*.
This is use full if you want to try out some beta functionality that is 
limited to this zone.
4. Scroll down to and click `More`. This will expand advanced options.
5. Find the part called **Project access**.
6. Set **Storage** to *Full*.
7. Set **Cloud SQL** to *Enabled*.
8. Click *Create*.

This will give your cluster access to Storage and the SQL instance we are going to create next.

 
## 2.3 Setup a MySQL-database

Go to Google Cloud Console in your browser.
Navigate to Storage -> SQL in the menu on the left.

Create a new instance named `cvapp-db`.
Create a user called `cvuser` and create a password for the user. 

Log in using the button `Connect using Cloud Shell`.
Paste the lines in the file [mysql/script.sql](../mysql/script.sql) into the shell to create the database and its tables.


## 2.4 Setup an external IP
We haven't deployed our application but we will need an IP address to reach our application later. 
Set up an external IP that we will use to connect to the frontend of your application. 

**Reserve an external IP address**
1) Go to `VPC Network`
2) Select `External IP Addresses`
3) Choose `Reserve Static IP Address`
4) Choose a name for your address
5) Set *attached to* and choose `cv-cluster`, the cluster you created in Task 2.2. 

