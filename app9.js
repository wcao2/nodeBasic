//reading and writing files on my pc

var fs=require('fs');//just set the variable name equal to the module name

// //read synchronous
// //readFileSync is a synchronous method which means fully read this file before moves on any other code
// var readMe=fs.readFileSync('readfile.txt','utf8');
// console.log(readMe);

// //write synchronous
// //first:where I want to the file to be written; second: the data I want to write
// fs.writeFileSync('writefile.txt','leave me alone');

//read asynchronous
//need a callback function to fire when the process is complete
fs.readFile('readfile.txt','utf8',function(err,data){
    //console.log(data);
    fs.writeFile('writefile.txt',data,(err)=>{
        if(err) throw err;
        console.log('it saved');
    });
});
//write asynchronous