var express=require('express');
var app=express();
var bodyParser=require('body-parser'); 
//right = is a middleware,urlencoded function is going to pass post data for us and store that in variable right here
var urlencodedParser=bodyParser.urlencoded({ extended: false });

//tell express I want to use ejs as my view engine
app.set('view engine','ejs');
app.use('/assets',express.static('stuffs'));

//send a HTML file back
app.get('/',function(req,res){
    res.render('app27index');//the reason why choose ejs
});

app.get('/contact',function(req,res){
    res.render('app30contact',{data:req.body});
});

//when i click submit, the data will be pass by urlencodeParser middleware,then I can access it in req object
app.post('/contact',urlencodedParser,function(req,res){
    console.log(req.body);//due to urlencodeParser,I can access body property
    res.render('app30contact_success',{data:req.body});
});

//dynamic routes
app.get('/profile/:name',function(req,res){
    var data={age:29,job:'program',hobbies:['eating','fishing','driving']};
    res.render('app26profile',{person:req.params.name,data:data});
});

app.listen(3000);
console.log('server starts on port 3000');