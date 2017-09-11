# Task 1: Set up and installation

## 1.1 Installations
- Install an editor that you want to use for coding. 
- Install Java SDK: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
  - Test that it works by typing `java -version`
- Install node and npm: https://docs.npmjs.com/getting-started/installing-node
  - Test that it is correctly installed by typing `node -v` and `npm -v` 
- Install Docker: https://www.docker.com/community-edition
- Create an account on Google Cloud Platform. 
  - Go to: https://console.cloud.google.com 
  - Sign up. You will have to register a payment method to complete the sign up. The first 100 days are free, so you should not be charged anything for your account.
  - Create a project
- Install Google Cloud command-line tool (gcloud): https://cloud.google.com/sdk/downloads
- Install Kubernetes command-line tool (kubectl). Run the following command in the terminal to install: `gcloud components install kubectl`
- Install maven: https://maven.apache.org/install.html
  - Check that maven is installed by typing `mvn -v` in the terminal 

We recommend downloading and installing [Git](https://git-scm.com/downloads), but you can continue without if you want. 

- Clone this project :

```
git clone git@github.com:vibbio/introduction-to-kubernetes.git
```

Or click Download. 


## 1.2 Start the environment

### 1.2.1 Start Docker

**Mac/Windows**

Open the Docker application you have installed and click "Run". 

**Linux**

Start Docker by typing `dockerd` in the terminal.
Docker should run in this terminal during the whole workshop.

**Check that Docker is running**

Check that Docker is running by typing `docker info` in the terminal.

### 1.2.2 Start using gcloud

Start using gcloud by typing: 

```
gcloud init
```

The command includes authentication for your user. 
This will open a tab in your browser where you will login with your chosen Google-account.

You will not have to sign in with Kubernetes (kubectl) since this is a part of gcloud.


**Authentication only**

If you have user google cloud before or want to reauthenticate, you can do this by typing:

```
gcloud auth login
```
This will also open a tab in the browser where you can sign in with your google account. 

### 1.2.3 Latest version

Make sure you have the latest version of gcloud by typing:

```
gcloud components update
```
