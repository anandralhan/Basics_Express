## First Express-Node Project 
### Notes
* npm manages project dependencies-as well as metadata about the project.

## Syntax difference b/w node and express
* ```send``` instead of ```end```
* ```status``` and ```type``` instead of ```writeHeader```

## Middleware
* Used the command : ```app.use```
* For anything that didn't get matched by route.

## Routes
* If we place 404 error method before routes , then no page will be routed as error handling function will act as a wildcard and take in all routes 
* The order in which routes and middleware are added is significant.
* adding a ```*``` wildcard to the route will redirect all the incoming routes to the route 
* ```/about*``` will redirect all about requests and any request after this like ```/about/contact``` won't be redirected

# MVC
* Model View Controller Protocol
* A loop protocol where the user sees the view and sends request to the controller like ```Express``` in this case and the controller gives out a model which is rendered in the view mostly in form of ```HTML```.
* For this view engines are used : ```Jade```
* ```Jade``` is a very minimal view engine which works of level of abstraction of ```HTML```.
* Another kind of view engine : ```Handlebars``` which not only uses HTML but also is easy as it is able to inject content directly into the ```HTML```.

## Using Handlebars package
* CLI to install :```npm install --save express3-handlebars```
<hr>

