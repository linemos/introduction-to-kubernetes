# Backend of our application 

Java application with REST endpoints that connects to an mysql database in google cloud.

## Connect to the database
Insert the name of your database instance, username and password in the file `AppConfig.java`.
You can find the instance name in the Google Cloud Console in your browser or by running this command:

```
gcloud sql instances describe mycvapp | grep connectionName
```

## To run locally
Run the application by running these commands in your terminal:

```
cd backend
mvn clean install
mvn exec:java
```

## About the backend
The backend contains a Jetty server with a single REST controller which connects to our database.