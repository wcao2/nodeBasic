//create and remove directories

//1:delete file
var fs=require('fs');
// fs.unlink('writefile.txt',function(){
//     console.log('file deleted');
// });
//or
// fs.unlink('writefile.txt',(err)=>{
//     if(err) throw err;
//     console.log('file deleted');
// });


//2:create/delete directory(synchronous)
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

//create/delete directory(asynchronous)
// fs.mkdir('stuff1',function(){
//     fs.readFile('readfile.txt','utf8',function(err,data){
//         fs.writeFile('./stuff1/writefile.txt',data,(err)=>{
//             if(err) throw err;
//             console.log('it saved');
//         })
//     })
// })
//del file first then can del directory
fs.unlink('./stuff1/writefile.txt',function(){
    console.log('file deleted');
    fs.rmdir('stuff1',function(){
        console.log('directory deleted');
    });
})
