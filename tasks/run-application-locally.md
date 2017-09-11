# Task 3: Run application locally

## 3.1 Run the frontend 

Our frontend is installed and run by Node Package Manager (npm). 

### Start the application
This is how you can start your application locally.
 1. Go into the folder/client from a different terminal: `cd /frontend/client`
 2. Install all packages with `npm i `.
 This will download all packages and store them in a folder called `node_modules`.
 3. Start the application by typing `npm start`.

Locally, the application is connected to the backend through the *proxy* field inside *package.json*. 
Since our backend runs on `localhost:5000` (you can view this in the terminal where you started the backend),
we should have this inside our *package.json*.

The frontend should automatically open a browser window where you can view our application.
Check that all data is correctly viewed. It might take som time to load the data into our application,
because the data is loaded from the database in the cloud (from Task 2.3).

Go back to whe Google Cloud SQL view in your browser to see if the SQL instance is finished with creation.

## 3.2 Provide credentials for local integration with Google Cloud SQL
We need to provide our machine with credentials for Google Cloud in order to run our application. Run this command:
```
gcloud auth application-default login
```

## 3.3 Run the backend
We can now start running the backend on our machines.
Open this project in your chosen editor.

### 3.3.1 Connect to your database
First, we have to specify the location of our database.
Find the instance name in the Google Cloud Console in your browser, under *SQL* in the menu on the left.
It will be in a format like this.
```
myprojectname:us-central1:cvapp-db
```

Replace the string 'INSERT_SQL_NAME_HERE' in the file `backend/src/main/java/com/vibbio/cvapp/AppConfig.java` with this instance name.

### 3.1.2 Start backend
1. In a terminal, navigate into the folder you have downloaded this project.
2. Run the application by running these commands in your terminal:

```
cd backend
mvn clean install
mvn exec:java
```

Make sure there are no errors from Maven.

## 3.4 Add more info to the database

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
Check that the data is correctly inserted. Don't close this tab, we will use it in the next task. 


## 3.4 Add data to the application
We want to add a field in the contact information to display your email address.
This should be added in the database, in the backend application and in the frontend application.  

### 3.4.1 Update the database
1. First we need to insert a new column from the table `personal`. Go back to the tab with the MySQL connection. Insert this:
```
ALTER TABLE personal ADD COLUMN email VARCHAR(255);
```
2. Check that a column is added to the table:
```
SELECT * FROM personal;
```
3. Insert your email. The update statement below will update all rows in the `personal` table.
You probably only have one row, so this is OK, If you have inserted multiple,
you have to add something like `WHERE row_name = 'row_value'` at the end of the statement.
```
UPDATE personal SET email = 'my_email@cvapp.com';
```

### 3.4.2 Retrieve email from database:
We also need to send the email to our frontend.
1. Open the file `backend/src/main/java/com/vibbio/cvapp/PersonalInfo.java` and add a field `private String email`.
Add it and initialize it in constructor as well.
2. Open the file `backend/src/main/java/com/vibbio/cvapp/CVAppController.java`.
3. In the function `getMe` we need to add `resultSet.getString("email")` as a third argument to the `PersonalInfo` constructor.

### 3.4.3 View the email in frontend
Add a field in the frontend to view the email address as part of your contact information. 
This can be done inside the `contact-information.js` component.
