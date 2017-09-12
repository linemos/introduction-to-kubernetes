# Task 1: Set up and installation
If you are using Mac, we recommend installing [brew](https://brew.sh/).
This will make the installation process a lot easier.
Almost all of the following can be installed with `brew install`, but we recommend downloading and installing Docker. 

## 1.1 Installations
1) Install an editor that you want to use for coding. 
2) Install Java SDK: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
  - Test that it works by typing `java -version`
3) Install node and npm: https://docs.npmjs.com/getting-started/installing-node
  - Test that it is correctly installed by typing `node -v` and `npm -v` 
  - Verify that you have an **npm version > 4.3.0** and **node version > 7.0.0** 
4) Install Docker: https://www.docker.com/community-edition
5) Create an account on Google Cloud Platform. 
  - Go to: https://console.cloud.google.com 
  - Sign up. You will have to register a payment method to complete the sign up. The first 100 days are free, so you should not be charged anything for your account.
  - Create a project
6) Install Google Cloud command-line tool (gcloud). 
  - Follow the guide [here](https://cloud.google.com/sdk/downloads).
  - Gcloud is successfully installed if you can run: 
      ```
      gcloud init
      ```
      - Choose option 1 when you are asked about the configuration.
      - When asked about what project you want to use, chose the one you created earlier.
      - This will open a tab in your browser where you will login with your chosen Google-account.
      
      **After the init process is finished**
      - Go to the Google Cloud Console in your browser and search in the search field for Google Compute Engine API.
      - Click *enable*. 
      
7) Install Kubernetes command-line tool (kubectl). Run the following command in the terminal to install: `gcloud components install kubectl`
8) Install maven: https://maven.apache.org/install.html
  - Check that maven is installed by typing `mvn -v` in the terminal 

We recommend downloading and installing [Git](https://git-scm.com/downloads), but you can continue without if you want. 

9) Clone this project :

```
git clone https://github.com/vibbio/introduction-to-kubernetes.git
```

**If you don't want to use git**, you can [download the zip](https://github.com/vibbio/introduction-to-kubernetes/archive/master.zip).


## 1.2 Start the environment

### 1.2.1 Start Docker

**Mac/Windows**

Open the Docker application you have installed and click "Run". 

**Linux**

Start Docker by typing `dockerd` in the terminal.
Docker should run in this terminal during the whole workshop.

**Check that Docker is running**

Check that Docker is running by typing `docker info` in the terminal.

### 1.2.3 Latest version of gcloud

Make sure you have the latest version of gcloud by typing:

```
gcloud components update
```


## 1.3 You are ready to start! :smile: