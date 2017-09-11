# About frontend

This is the frontend of our CV application and it consists of two parts. 

The main code is located under the folder *client*, and is based on [React Create-app](https://github.com/facebookincubator/create-react-app). 

## Run locally 
When running our code locally, we can go to this folder (`cd /frontend/client`) and type `npm i ` and `npm start`.
This will install all dependencies and start the development server.  

Under development, we connect the frontend to the backend through *proxy* inside *package.json*.
Since our backend runs on port 5000, we have *localhost:5000* inside our package.json. 

## Run in the cloud
When deploying our application to the cloud, we need to know the address of our backend application (it will not be localhost anymore). 
This can be found through environment variables. 


## About the frontend: 
Our frontend is made of:
 - [React](https://facebook.github.io/react/)
 - [Redux](http://redux.js.org/)
 - [React bootstrap](https://react-bootstrap.github.io/components.html#page-layout): used for simple styling
 
We have also added [react-router](https://reacttraining.com/react-router/) in case you want different pages on your application. 
You can add multiples pages by adding `<Route path="/" component={YourNewComponent} />` inside *client/src/index.js*.
 