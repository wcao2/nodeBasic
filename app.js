//Global object(original object in JS), it has many properties and methods

//console.log("fuck u");

// setTimeout(function(){
//     console.log('3 second has passed');
// },3000);

// var time=0;
// setInterval(function(){
//     time+=2;
//     console.log(time+' second has passed');
// },2000);

var time=0;
var timer=setInterval(function(){
    time+=2;
    console.log(time+' second has passed');
    if(time>5){
        clearInterval(timer);
    }
},2000);

console.log(__dirname);
console.log(__filename);