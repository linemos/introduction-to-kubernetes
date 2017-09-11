# Task 6: Update the application

We will now update the frontend application without redeploying the backend.

## 6.1 Change color to the application 
1. Open the file *frontend/client/src/app/app.css* and enter another background color for the `App-header`.
2. Run locally using the steps from [task 3.1 and 3.3](run-application-locally.md)
3. When you are satisfied with the choice of color, save the file.
4. Update the version in the file *package.json* to 0.1.1
5. Rebuild the frontend docker image by running the steps in [task 4.1](build-docker-images.md). Note that you only have to rebuild the frontend.
6. Run the command `docker images` to see your newly created image.
7. Open `kubernetes-deployment/frontend/deployment.yaml` and update the docker image path to 0.1.1


## 6.2 Updating the frontend:
1. Now that we have created a new frontend image, we have to push it to Google Container Registry.

```
gcloud docker -- push us.gcr.io/[project_name]/[build_name]:0.1.1
```
Note that we have updated the 0.1.1.

2. With our image ready to go in the cloud, all we have to do is apply the new changes.

```
kubectl apply -f kubernetes-deployment/frontend/deployment.yaml
```

This command will kill our living frontend pods and make birth to new ones using our new docker images.
Watch the circle of life with this command:

```
kubectl get pods --watch
```
Press *ctrl + c* to stop the process.
Our frontend service will automatically detect what nodes are dead and new, and start sending traffic to the new pods.
Note that if the deployment file is the same as before, Kubernetes will let the pods live and not create new pods.
