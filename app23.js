
var express=require('express');

var app=express();

app.get('/',function(req,res){
    //not specify the content type inhere,because express is clever enough to figure out what this is
    res.send('this is a homepage');
});

app.get('/contact',function(req,res){
    res.send('this is contact page');
})

app.listen(3000);
console.log('server starts on port 3000');