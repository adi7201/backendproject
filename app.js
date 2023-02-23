const express = require('express');
const app= express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute=require('./api/routes/user');
const profileRoute=require('./api/routes/profile');
const moveRoute=require('./api/routes/reportyourmove');
mongoose.connect('mongodb+srv://aditi:aditi7201@sbs.5azb4sx.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on('error',err=>{
    console.log('connection failed');
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connection.on('connected',connected=>{
    console.log('connection hogya.....');
});
 
app.use('/user',userRoute);
app.use('/profile',profileRoute);
app.use('/reportyourmove',moveRoute);

app.use((req,res,next)=>{
    res.status(404).json({
        message:'galat jgh aagae'
    })
})


module.exports=app;
