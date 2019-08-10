//1:normal function statement
function sayHi(){
    console.log('fuck u!')
}
sayHi();

//2:function expression(this is an anonymous function)
var sayBye=function(){
    console.log('bye');
};
//invoke anonymous function with variable and parentheses
sayBye();

//3:pass function from one thing to another
//take function as parameter
function callFunction(fun){
    fun();
}
callFunction(sayBye);


