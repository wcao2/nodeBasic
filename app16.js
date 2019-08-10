var http=require('http');
var fs=require('fs');

// var myReadStream=fs.createReadStream(__dirname+'/readfile.txt','utf8');
// var myWriteStream=fs.createWriteStream(__dirname+'/writefile.txt');

// //For pipe, don't need to manually listening for chunk of data event when recive the chunk of data
// myReadStream.pipe(myWriteStream);

//response object is a writable stream
var server=http.createServer(function(req,res){
    console.log('request was made: '+req.url);
    res.writeHead(200,{'Content-type':'text/plain'});
    var myReadStream=fs.createReadStream(__dirname+'/readfile.txt','utf8');
    myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('now it is listening 3000');