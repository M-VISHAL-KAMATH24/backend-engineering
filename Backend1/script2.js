const fs=require('fs');
fs.writeFile('hi.txt','heey i am write file operation',function(err){
    if(err) console.log(err);
    else console.log('done');
})
fs.appendFile('hi.txt','me accha hoon',function(err){
    if(err) console.log(err);
    else console.log('done');
})

fs.rename('hi.txt','hello.txt',function(err){
    if(err) console.log(err);
    else console.log('rename done');
})

fs.copyFile('hello.txt','./copy/copy.txt',function(err){
    if (err) console.log(err.message);
    console.log('done');
})
fs.unlink('./copy/copy.txt',function(err){
    if(err) console.log(err);
    else console.log('done');
})
fs.rm('./copy',{recursive:true},function(err){
    if (err) console.log(err);
    else console.log('deleted ');
})
fs.readFile('hello.txt','utf8',function(err,data){
    if (err) console.log(err.message);
    else console.log(data);
})