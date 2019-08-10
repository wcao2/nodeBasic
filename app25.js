
var express=require('express');
var app=express();
//tell express I want to use ejs as my view engine
app.set('view engine','ejs');

//send a HTML file back
app.get('/',function(req,res){
    //__dirname get a directory of a current file
    res.sendFile(__dirname+'/app17index.html');
});

app.get('/contact',function(req,res){
    res.sendFile(__dirname+'/app19contact.html');
});

//dynamic routes
app.get('/profile/:name',function(req,res){
    var data={age:29,job:'program'};
    //don't need to give the whole path name because it knows to look in the views folder
    //the way to pass data to a view is by passing an object as a second parameter
    //pass through properties(person,data) to this object which are going to take data
    res.render('app25profile',{person:req.params.name,data:data});
});

app.listen(3000);
console.log('server starts on port 3000');