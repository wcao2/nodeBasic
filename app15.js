var http=require('http');
var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/readfile.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+'/writefile.txt');

myReadStream.on('data',function(chunk){
    console.log('new chunk receive');
    myWriteStream.write(chunk);
});