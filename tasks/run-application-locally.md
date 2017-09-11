# Task 3: Run application locally

Open this project in your chosen editor.

## 3.1 Run the backend

### 3.1.1 Connect to your database
First, we have to specify the location of our database along with login credentials in the application.
Insert the name of your database instance, username and password in the file
`backend/src/main/java/com/vibbio/cvapp/AppConfig.java`.
You can find the instance name in the Google Cloud Console in your browser, it will be in a format like this:
```
myprojectname:us-central1:cvapp-db
```

### 3.1.2 Start backend
Run the application by running these commands in your terminal:

```
cd backend
mvn clean install
mvn exec:java
```
Make sure there are no errors from Maven.

## 3.2 Run the frontend 

Our frontend is installed and run by Node Package Manager (npm). 


### Start the application
 1. Go into the frontend folder from a different terminal: `cd /frontend`
 2. Install all packages with `npm i `.
 This will download all packages and store them in a folder called `node_modules`.
 3. Start the application by typing `npm start`.

The application is connected to the backend through the *proxy* field inside *package.json*. 
Since our backend runs on `localhost:5000` (you can view this in the terminal where you started the backend),
we should have this inside our *package.json*.

The frontend should automatically open a browser window where you can view our application.
Check that all data is correctly viewed. It might take som time to load the data into our application,
this is because the data is loaded from the cloud.  

## 3.3 Check the status of your application
We want to check that our application works. Try to change a field in the databased script and update the database. 

1. Go back to the Google Cloud Console in your browser, and visit the SQL page.
2. Click on your `cvapp-db` and then `Connect using Cloud Shell`.
3. Log in with username and password.
4. Insert a line, for example a line like this:
```
INSERT INTO education (place, comment, from_year, to_year) VALUES ('Your school','study','year','year');
```

5. Type this to list all the data in your education table:
```
SELECT * FROM education;
```
Check that the data is correctly inserted.   


## 3.4 Add data to the application
We want to add a field in the contact information to display your email address.
This should be added in the database, in the backend application and in the frontend application.  

### 3.4.1 Update MYSQL (LINE)

### 3.4.2 Retrieve email from database (LINE)

### 3.4.3 View the email in frontend
Add a field in the frontend to view the email address as part of your contact information. 
This can be done inside the `contact-information.js` component.
