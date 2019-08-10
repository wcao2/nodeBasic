
var express=require('express');

var app=express();

app.get('/',function(req,res){
    //not specify the content type inhere,because express is clever enough to figure out what this is
    res.send('this is a homepage');
});

app.get('/contact',function(req,res){
    res.send('this is contact page');
});

//dynamic routes
app.get('/profile/:id',function(req,res){
    res.send('your requested to see a profile with the id of '+req.params.id);
});

app.listen(3000);
console.log('server starts on port 3000');