//send back some JSON


var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    console.log('request was made: '+req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    var myObj={
        name:'wei',
        job:'developer',
        age:29
    };
    //res.end() only receive string or buffer,so..
    res.end(JSON.stringify(myObj));
});

server.listen(3000,'localhost');
console.log('this server starts point at 3000');