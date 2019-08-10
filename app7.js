//there are also some of in-built core modules
var event=require('events');
//create a new variable
var myEmitter=new event.EventEmitter();
//the event name is someEvent and this is a callback function
myEmitter.on('someEvent',function(msg){
    console.log(msg);
});

//the first parameter is which emit I want to fire off;the second is what I want to pass through into this function
myEmitter.emit('someEvent','the event was emitted');

//the util module is allowed us to inherit certain things from objects built into nodejs
var util=require('util');
//create a new object constructor
var Person=function(name){
    this.name=name;
}

//first para:object I want to inherit sth ;second:which things I want to inherit
//anything created using Person constructor is going to have custom events attached to it
util.inherits(Person,event.EventEmitter);
var James=new Person('james');
var Mary=new Person('mary');
var Wei=new Person('wei');
var people=[James,Mary,Wei];

people.forEach(function(person111){
    person111.on('Speak',function(msg){
        console.log(person111.name+' said: '+msg);
    });
});
//i can emit that event on whichever person i make in the array
James.emit('Speak','fuck you');


