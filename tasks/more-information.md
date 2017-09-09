# More information

### REST endpoints
We have created som endpoints to retrieve data from your backend application. Feel free to addand change endpoints as you like 😊

#### Contact Information
Get all contact information: `/me`. Returns json with content. 
Example: 
```
{
    name: 'Espen Askeladd',
    location: 'Oslo'
}

```
#### Education
Get all education experience: `/education`. Returns a list of objects. 
Example: 
```
[
    {
        year_from: '2010',
        year_to: '2013',
        place: 'University of Oslo',
        comment: 'Bachelor\'s degree'
    },
    {
        year_from: '2013',
        year_to: '2015',
        place: 'University of Oslo',
        comment: 'Master\'s degree'
    }
]
```

#### Work
Get all work experience: `/work`. Returns a list of objects on the same format as education. 
