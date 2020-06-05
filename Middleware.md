## Middleware and Route Handlers
Conceptually, middleware is a way to encapsulate functionality: specifically, functionality that operates on an HTTP request to your application. Practically, a middleware is simply a function that takes three arguments: a request object, a response object, and a “next” function, which will be explained shortly. (There is also a form that takes four arguments, for error handling, which will be covered at the end of this chapter.)
* In an Express app, you insert middleware into the pipeline by calling app.use.
* if you don’t call next(), the request terminates with that middleware.
* Route Handlers can be thought of as middleware basically of the form ```app.VERB```.
* Route handlers only handle specific HTTP VERB.

## Route Handlers VS Middlewares
* Route handlers require a path usually of the form ```/path``` whereas middlewares do not use path as parameters.

If you don’t call next(), the pipeline will be terminated, and no more route handlers or middleware will be processed. If you don’t call next(), you should send a response to the client (res.send, res.json, res.render, etc.); if you don’t, the client will hang and eventually time out.

If you do call next(), it’s generally inadvisable to send a response to the client. If you do, middleware or route handlers further down the pipeline will be executed, but any client responses they send will be ignored.\
 Route handlers take a callback function of usually 2,3,4 paramters and depending on the number of parameters the value of the parameter changes . 
 For Express 4.0 : 
 * 2 parameters : ```(request,response)```
 * 3 parameters : ```(request,response,next)```
 * 4 parameters : ```(error,request,response,next)```
