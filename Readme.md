# [Alexander Zanfir] Building an Angular Application with Node and Token Authentication [25.10.2017, ENG]

<br/>

### 03 - Architecture and Back-end Setup
        
    $ cd backend/
    $ npm init -y
    
    $ npm install --save express
    $ npm install --save-dev nodemon
    
    $ nodemon server.js
    
http://localhost:3000/
    
    
<br/>

### 04 - Angular Front-end Setup

https://angular.io/docs/ts/latest/cli-quickstart.html


    $ cd /project/
    $ npm install --save-dev @angular/cli
    $ cd frontend/
    $ ng serve --host 0.0.0.0 --port 8080
    
<br/>

### 05 - Sending Data with Node
    
    $ cd backend/
    $ nodemon server.js
    
http://localhost:3000/posts    

![Application](/img/05-01.png?raw=true)


<br/>

### 06 - Getting Data with Angular

    $ cd backend/
    $ npm install --save cors
    $ nodemon server.js
    
    $ cd frontend/
    $ ng serve --host 0.0.0.0 --port 8080
    

![Application](/img/06-01.png?raw=true)


<br/>

### 07 - Setting up Angular Materials

https://material.angular.io/


    $ cd frontend/
    $ npm install --save @angular/material @angular/cdk


![Application](/img/07-01.png?raw=true)


<br/>

### 08 - Displaying Messages

![Application](/img/08-01.png?raw=true)


<br/>

### 09 - Register Endpoint with Express and Node

    $ cd backend/
    $ npm install --save body-parser


chrome://apps

Postman

![Application](/img/09-01.png?raw=true)




___

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
