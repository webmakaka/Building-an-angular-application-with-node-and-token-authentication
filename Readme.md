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

<br/>

### 10 - Create User with Mongo

https://mlab.com

    $ cd backend/
    $ npm install --save mongoose


![Application](/img/10-01.png?raw=true)

![Application](/img/10-02.png?raw=true)


<br/>

### 11 - Creating a Nav Bar

![Application](/img/11-01.png?raw=true)

<br/>

### 12 - Setting up Routes with the Angular Router

![Application](/img/12-01.png?raw=true)

<br/>

### 13 - Developing the Register View

![Application](/img/13-01.png?raw=true)

<br/>

### 14 - Binding to the Register Inputs and Button

![Application](/img/14-01.png?raw=true)

<br/>

### 15 - Developing a Front-end Register Service

![Application](/img/15-01.png?raw=true)

![Application](/img/15-02.png?raw=true)


<br/>

### 16 - Developing a Login Front-end Component

![Application](/img/16-01.png?raw=true)


<br/>

### 17 - Generating Tokens in a Back-end Login Service

    $ cd backend/
    $ npm install --save jwt-simple

![Application](/img/17-01.png?raw=true)

![Application](/img/17-02.png?raw=true)


<br/>

### 18 - Saving a Login Token in the Browser

![Application](/img/18-01.png?raw=true)


<br/>

### 19 - Getting a User List from the Back-end

http://localhost:3000/users/


![Application](/img/19-01.png?raw=true)

<br/>

### 20 - Displaying the Users in a Front-end Component

http://localhost/users

![Application](/img/20-01.png?raw=true)


<br/>

### 21 - Using the Routerlink Directive to Link with Parameters

![Application](/img/21-01.png?raw=true)

<br/>

### 22 - Developing a Profile Service Endpoint

http://localhost:3000/profile/5a9c3229fb8aec01fe178862

![Application](/img/22-01.png?raw=true)

<br/>

### 23 - Creating a Profile Component

![Application](/img/23-01.png?raw=true)

<br/>

### 24 - Displaying Profile Data from a Front-end Service



<br/>

### 25 - Improving Your User Model

![Application](/img/25-01.png?raw=true)

![Application](/img/25-02.png?raw=true)

![Application](/img/25-03.png?raw=true)

![Application](/img/25-04.png?raw=true)


___

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
