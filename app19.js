var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    console.log('request was made: '+req.url);
    if(req.url==='/home'||req.url==='/'){
        //write header on res object
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/app17index.html').pipe(res);
    }else if(req.url=='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/app19contact.html').pipe(res);
    }else if(req.url==='/api/wei'){
        var names=[{name:'cc',age:55,sex:'m'},{name:'bb',age:24,sex:'f'},{name:'aa',age:12,sex:'f'}];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(names));
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        //res.end('cannotnfind anything');
        fs.createReadStream(__dirname+'/app19_404.html').pipe(res);
    }
});

server.listen(3000,'localhost');
console.log('server starting on port 3000');