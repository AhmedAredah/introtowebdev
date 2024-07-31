# Introduction to Web Development

## Node.JS 

Download Node.JS (Runtime Environment) to work with Node JS applications from https://nodejs.org/en

## Database

### Localhost DB

We are using a local version of MongoDB. This document will help you with installing MongoDB and get the same development environment as I was using during the presentation. 

### Downloading MongoDB

1. Download MongoDB from https://www.mongodb.com/try/download/community 

    1. Check to enable "Install MonogD as a Service",
    2. Select "Run Service as Network Service User" 

2. In the service configuration page, select “Run service as Network Service user” as below:

3. Download MongoShell from http://mongodb.com/try/download/shell. Make sure you install it for everyone.

### Setting up the Database

1. Inside the backend folder, you will find a powershell script "setupMongoDB.ps1". Double click it to run. This file will setup the database for you.


## Frontend

to start the front end, navigate to the frontend directory and inside your CLI type:
```
    node run start
```

this will start the GUI application. 


## Backend

to start the backend, navigate to the backend directory and inside your CLI, type:
```
    node run start
```