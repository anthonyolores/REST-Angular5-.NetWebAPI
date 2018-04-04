# CRUD Angular 5 + .NetWebAPI
CRUD operation using Angular 5 in client side and .Net Web API in server side. This project is a basic demonstration on how to do REST(GET/POST/DELETE/PUT) from Angular 5 client to .Net Web API server. In server side it uses MS SQL server as for data storage.

# Components
Building blocks to make the whole CRUD operation run. The procedures stated below are not detailed but an overview only to reproduce the files.

#### Table in MS SQL Server
The Person table will be the souce data of CRUD operations

  1. Create table "Person" in database
  2. Add int field "Id" as primary key
  3. Add varchar field "Name"
  4. Add 1 record to be pulled in GET request

#### .Net Web API Project
The server-side project that will process all REST requests

  1. Create an empty .Net Web API project
  2. Add an Entity Framework from the Person table
  2. Add a Web API Controller
  3. Set the routes in RouteConfig.cs
  4. Allow Cross-origin resource sharing in WebApiConfig.cs

#### Publish in IIS
The API will be called through the hostname plus routes being set 
  1. Publish the .Net Web API project as file system
  2. In IIS Manager Add a website and locate the published file system
  2. Add an Application pool
  3. Set the hostname if the hostname being set is not a localhost/IP address
  4. Test the REST operations in the browser

#### Angular 5 project
The client-side project that will benefit the Web API

1. Install NodeJs
2. Open NPM and install angular framework "npm install -g @angular/cli"
3. Create new project "ng new my-app"
4. Add the Person interface
5. Add the Service that will do the HTTP requests and inject it in parent module
6. Deploy the proejct "ng serve" 
7. Test the REST operations in the browser (http://localhost:4200/)
