var express = require('express');
var sys = require("sys"),  
my_http = require("http");  
var fs = require("fs");
fs.readFile('./site/journey.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    my_http.createServer(function(request, response) { 
        response.writeHeader(200, {"Content-Type": "text/html"});  // <-- HERE!
        response.write(html);  // <-- HERE!
        response.end();  
    }).listen(8080); 
}); 
sys.puts("Server Running on 8080");  