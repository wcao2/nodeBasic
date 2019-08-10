//different module patterns to export our data or functions to make them available to other files

//when i create node app, i don't typically dump all of my app code in one files
var counter=function(arr){
    return 'There are '+arr.length+' elements in this array ';
};

// var adder=function(a,b){
//     //use template string which is new addition to es6
//     return `The sum of the 2 number is ${a+b}`;
// };
//or
module.exports.adder=function(a,b){
    //use template string which is new addition to es6
    return `The sum of the 2 number is ${a+b}`;
};

var pi=3.142;

//module.exports= counter;

//export both counter and adderon different properties of exports object
module.exports.counter=counter;
module.exports.pi=pi;
//or
// module.exports={
//     counter:counter,
//     pi:pi
// };