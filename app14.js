var http=require('http');
var fs=require('fs');

//read txt file a little at a time and data will be read a small amount of time through the stream
//then fill up the buffer that buffer will pass the data run in chunks
var myReadStream=fs.createReadStream(__dirname+'/readfile.txt','utf8');
//createReadStream inherits from the event emitter and event called data on createReadStream 
//allows us to listen when we receive any kind of data
myReadStream.on('data',function(chunk){
    //when received the chunk, it will fire the function on 'data' event
    console.log('new chunk receive');
    console.log(chunk);
});