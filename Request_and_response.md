## URL
Basic URL contains :
* Protocol : ```http://``` : Used to define the protocol of request transmission.
* Host : ```google.com``` : Defines the or identifies the server.On the internet the hostname will end up in top-level domain(TLD).
```www``` is a very common subdomain .
* Port : Collection of numbered ports . Standard for http: 80 and for https: 443
* Path : first part of URL we care about
* Querystring : Optional collection of name/value pairs.

When you type a URL into a browser (or click a link), the browser issues an HTTP GET
request to the server. The important information passed to the server is the URL path
and querystring. The combination of method, path, and querystring is what your app
uses to determine how to respond.

## Parameters
* ```param``` object stores all parameters

## HTTP.serverResponse
* ```res.status``` : Sets the Http status code.
* ```res.send(body)```, ```res.send(status, body)``` :Sends a response back to the client with an optional status code.
* ```res.JSON``` : Sends JSON to the client
* ```res.sendFile(path, [options], [callback])``` : This method will read a file specified by path and send its contents to the client.
