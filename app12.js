var http=require('http');

//use the method(createServer) in core module http
//when there is a request to this port,it will fire this function
var server=http.createServer(function(req,res){
    //write response headers
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hey Wei Cao');
});

server.listen(3000,'127.0.0.1');
console.log('hey guy,now listening to port 3000');