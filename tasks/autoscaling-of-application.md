# Task 7: Autoscaling of application

Your application requires more resources from the server if you have many users on your application. 
One way to get more resources is by adding lots of resources, but it is not desirable to pay for resources you don't use.
Autoscaling is a way of adding (and paying) for extra resources only when it is needed. 

## 7.1 Turn on autoscaling for your application
1. Go to Google Cloud Console in your browser and go to Container Engine in the menu on the left.
2. Click on your cluster
3. Click Edit
4. From the Autoscaling drop-down menu, click On
5. Input 1 as minimum size and 4 as maximum size
6. Click *save*. This might take several minutes.

Your cluster will now scale up or down from 1 to 3 based on the workload.
This is still beta functionality, meaning it can change in a backward-incompatible way without notice, so use with caution.

## 7.2 Now it's time to DDoS ourselves!

To test the auto scaling, run this little bash script in a terminal:

```
for i in `seq 1 40`; do curl http://INSERT_YOUR_EXTERNAL_IP; done
```

Go to Google Cloud Console, navigate to Compute Engine in the menu on the left.
Choose Instance Groups and click on your group named something like `gke-cv-cluster-default-pool-1233564-grp`
