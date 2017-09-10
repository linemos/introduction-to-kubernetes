# Task 2: Google Cloud Platform

### 2.1 Create a project
Log in to [google cloud](https://console.cloud.google.com/) and create a project.
Wait for the API and related services to be enabled. This can take several minutes.
Enable billing for your project.


### 2.2 Create a cluster
We need a cluster where we want to run our application.
Create a cluster by navigating to the menu on the left in Google Cloud Console, scroll down to Compute.
Select Container Engine and then Container clusters. Click `Create cluster`.

1. Name your cluster `cv-cluster`.
2. Choose a zone starting with us-central1.
This is usefull if you want to try out some beta functionality that is limited to this zone.
3. Scroll down to the `More` link and click it to expand advanced options.
4. Set Storage to full and Cloud SQL to enabled.
 
### 2.3 Setup a MySQL-database

Go to Google Cloud Console in your browser. Navigate to Storage -> SQL in the menu on the left.

Create a new instance named `mycvapp`. Create a user called `cvuser` and create a password for the user.

Log in using the button `Connect using Cloud Shell`.
Paste the lines in the file [mysql/script.sql](../mysql/script.sql) into the shell to create the database and its tables.


### 2.X (TODO) Setup an external IP
INGRID: Dette blir vel feil, vi skal vel ikke reservere IP-adresse før etter vi har kjørt create på ingressen?

We need an external IP to reach our application.
Set up an external IP that we will use to connect to the frontend of your application. 

**Reserve an external IP address**
INGRID: Dette blir vel feil, vi skal vel ikke reservere IP-adresse før etter vi har kjørt create på ingressen?
1) Go to `VPC Network`
2) Select `External IP Addresses`
3) Choose `Reserve Static IP Address`
4) Choose a name for your address
5) Set *attached to* to point to the cluster you created in Task 1.2. 


### 2. (TODO) Check the cluster is working
Check the status of your cluster... INGRID: How?