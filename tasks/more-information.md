# More information

## REST endpoints
We have created som endpoints to retrieve data from your backend application. Feel free to addand change endpoints as you like 😊

#### Contact Information
Get all contact information: `/api/me`. Returns json with content. 
Example: 
```
{
    name: 'Espen Askeladd',
    location: 'Oslo'
}

```
#### Education
Get all education experience: `/api/education`. Returns a list of objects. 
Example: 
```
[
    {
        yearFrom: '2010',
        yearTo: '2013',
        place: 'University of Oslo',
        comment: 'Bachelor\'s degree'
    },
    {
        yearFrom: '2013',
        yearTo: '2015',
        place: 'University of Oslo',
        comment: 'Master\'s degree'
    }
]
```

#### Work
Get all work experience: `/api/work`. Returns a list of objects on the same format as education. 

## About the different part of our application

### MYSQL database
Read more information about the MYSQL database [here](/../mysql/readme.md). 

### Backend
Read more information about the backend [here](/../backend/README.md). 

### Frontend
Read more information about the frontend [here](/../frontend/README.md).

