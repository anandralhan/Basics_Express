const app = require('express')();
// Executed the First of all
app.use(function(req, res, next){
    console.log('\n\nALLWAYS');
    next();
});
// Will get executed but will terminate the request
app.get('/a', function(req, res){
    console.log('/a: route terminated');
    res.send('a');
});
// Won't' be executed
app.get('/a', function( req , res){
    console.log('/a: never called');
});
// Will be executed and will listen as it has the next() function
app.get('/b', function(req, res, next){
    console.log('/b: route not terminated');
    next();
});
//Will be executed every time except when /a is requested
app.use(function(req, res, next){
    console.log('SOMETIMES');
    next();
});
// Will be executed
app.get('/b', function(req, res, next){
    console.log('/b (part 2): error thrown' );
    throw new Error('b failed');
});
// will be executed as the error function
app.use('/b', function(err, req, res, next){
    console.log('/b error detected and passed on');
    next(err);
});
// Will be executed
app.get('/c', function(err, req){
    console.log('/c: error thrown');
    throw new Error('c failed');
});
// Will be executed but without error as error is not passed on
app.use('/c', function(err, req, res, next){
    console.log('/c: error detected but not passed on');
    next();
});
// Stopping the error requests on 500
app.use(function(err, req, res, next){
    console.log('unhandled error detected: ' + err.message);
    res.send('500 - server error');
});
// Finally sending 404 to every page before timeout
app.use(function(req, res){
    console.log('route not handled');
    res.send('404 - not found');
});
// starting the server
app.listen(3000, function(){
    console.log('listening on 3000');
});