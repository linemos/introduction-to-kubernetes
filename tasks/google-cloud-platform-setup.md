# Task 2: Google Cloud Platform

## 2.1 Create a project
Log in to [google cloud](https://console.cloud.google.com/)
and choose your project name in the drop down menu in the blue header.

## 2.2 Create a cluster
We need a cluster where we want to run our application.
Create a cluster by navigating to the menu on the left in Google Cloud Console, 
scroll down to Compute.

1. Select Container Engine and then Container clusters. Click `Create cluster`.
2. Name your cluster `cv-cluster`.
3. Choose the zone *us-central1-a*. It might take some time before you can choose a zone. Be patient :blush:
This is useful if you want to try out some beta functionality that is 
limited to this zone.
4. Scroll down to and click `More`. This will expand advanced options.
5. Find the part called **Project access**.
6. Set **Storage** to *Full*.
7. Set **Cloud SQL** to *Enabled*.
8. Click *Create*. This will probably take several minutes. You can start with Task 2.3 while you wait :simple_smile: 
Notice also that you can view the setup progress for your cluster in the top right corner. 

This will give your cluster access to Storage and the SQL instance we are going to create next.

 
## 2.3 Setup a MySQL-database

Go to Google Cloud Console in your browser.
1. Navigate to SQL in the menu on the left.
2. Chose a MySQL-database, second generation.
3. Name the instance `cvapp-db` and set the root password to `cvapp-passord.
4. Set Region to *us-central1* and zone to *us-central1-a*
5. Click create.
*This process can take a while.* While you wait you can do this:
    1. In the search field in the blue header, search for Google Cloud SQL API and click enable.
    If you haven't already enabled billing, you have to do this now. 
    2. Start with the next tasks in [3.1](run-application-locally.md)
6. When the database is created, click on link *cvapp-db* and click on the tab *Users*.
7. Create a user called `cvuser` and set the password to `cvapp-passord`. 
8. Go back to *Overview* and log in using the button *Connect using Cloud Shell*. Type the password `cvapp-passord`.
9. Paste the lines in the file [mysql/script.sql](../mysql/script.sql) into the shell to create the database and its tables.

## 2.4 Setup an external IP
We haven't deployed our application but we will need an IP address to reach our application later. 
Set up an external IP that we will use to connect to the frontend of your application. 
You will get a warning doing this, but it's ok, we will connect it to our service soon.

**Reserve an external IP address**
1) Go to *VPC Network*
2) Select *External IP Addresses*
3) Choose *Reserve Static Address*
4) Choose a name for your address
5) Set *attached to* and choose `cv-cluster`, the cluster you created in Task 2.2. 

