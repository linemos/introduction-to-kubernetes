# Task 7: Autoscaling of application

Your application requires more resources from the server if you have many users on your application. 
One way to get more resources is by adding lots of resources, but you don't want to pay for resources you don't use.
Autoscaling is a way of adding (and paying) for extra resources only when it is needed. 

## Turn on autoscaling for your application
1. Go to Google Cloud Console in your browser and go to Container Engine in the menu on the left.
2. Click on your cluster
3. Click Edit
4. From the Autoscaling drop-down menu, click On
5. Input 1 as minimum size and 3 as maximum size
6. Save

Your cluster will now scale up or down from 1 to 3 based on the workload.
This is still beta functionality, meaning it can change in a backward-incompatible way without notice, so use with caution.