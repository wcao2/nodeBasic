
var express=require('express');
var app=express();
//tell express I want to use ejs as my view engine
app.set('view engine','ejs');

//send a HTML file back
app.get('/',function(req,res){
    res.sendFile(__dirname+'/app17index.html');
});

app.get('/contact',function(req,res){
    res.sendFile(__dirname+'/app19contact.html');
});

//dynamic routes
app.get('/profile/:name',function(req,res){
    var data={age:29,job:'program',hobbies:['eating','fishing','driving']};
    res.render('app26profile',{person:req.params.name,data:data});
});

app.listen(3000);
console.log('server starts on port 3000');