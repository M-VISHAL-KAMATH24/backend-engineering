const express=require('express');
const app=express()

app.use((req,res,next)=>{
    console.log('middleware started!');
     next();
});
app.use((req,res,next)=>{
    console.log('next middleware started!');
     next();
});
app.get('/',(req,res)=>{
    res.send('hello world! this is express');
})
app.get('/profile',(req,res)=>{
    res.send('you are in profile page')
    
})
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('something broke in server');
   
})
app.listen(3000)