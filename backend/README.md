# Backend of our application 

Java application with REST endpoints that connects to an mysql database in google cloud.

## Connect to the database
Insert the name of your database instance, username and password in the file `AppConfig.java`.
You can find the instance name in the google cloud console in your browser.'

## To test locally
Run the application:

```
cd backend
mvn clean install
mvn exec:java
```