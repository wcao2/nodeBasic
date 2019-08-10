
var express=require('express');
var app=express();
//tell express I want to use ejs as my view engine
app.set('view engine','ejs');
//use middleware
//any request make to /assets or add sth else, this middleware is going to fire 
//static() is function build-in express to serve up static files
//then I map this static to a folder where the static files stored
app.use('/assets',express.static('stuffs'));

//send a HTML file back
app.get('/',function(req,res){
    res.render('app27index');//the reason why choose ejs
});

app.get('/contact',function(req,res){
    res.render('app27contact');
});

//dynamic routes
app.get('/profile/:name',function(req,res){
    var data={age:29,job:'program',hobbies:['eating','fishing','driving']};
    res.render('app26profile',{person:req.params.name,data:data});
});

app.listen(3000);
console.log('server starts on port 3000');