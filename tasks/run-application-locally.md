# Task 3: Run application locally


## 3.1 Run the backend

LINE

## 3.2 Run the frontend 

Our frontend is installed and run by Node Package Manager (npm). 


### Start the application
 - Install all packages with `npm i ` (inside /frontend folder)
 - Run the application with `npm start`

The application is connected to the backend through *proxy* inside *package.json*. 
Since our backend runs on `localhost:5000`, we should have this inside our *package.json*.

## 3.3 Check the status of your application
We want to check that our application works. Try to change a field in the databased script and update the database. 
For example, add a comment to one of your education rows and upload the data to the database 

(LINE: bedre beskrivelse?)

Check that the data is correctly updated.   


## 3.4 Add data to the application
We want to add a field in the contact information to display your email address.
This should be added in the database, in the backend application and in the frontend application.  

### 3.4.1 Update MYSQL (LINE)

### 3.4.2 Retrieve email from database (LINE)

### 3.4.3 View the email in frontend
Add a field in the frontend to view the email address as part of your contact information. 
This can be done inside the `contact-information.js` component. 
