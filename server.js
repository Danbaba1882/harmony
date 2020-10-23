const express= require('express');
const path = require('path');
const harmony=express();
const bodyparser= require('body-parser');
const moment = require('moment');
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const session = require('express-session'); 
const ejs = require('ejs');
var ObjectId = mongoose.Types.ObjectId;


const Schema = mongoose.Schema;
harmony.set('view engine', 'ejs');
harmony.use(bodyparser.json());
harmony.use(express.static(path.resolve(__dirname+'/')));
harmony.use(bodyparser.urlencoded({extended: true}));
MONGODB_URI = 'mongodb+srv://danbaba1882:NAZIR1882@megaincomedb-wqmxa.mongodb.net/MI-DATABASE';
URI= 'mongodb://127.0.0.1:27017/MI-DATABASE';
const mongoOptions={useNewUrlParser : true, useUnifiedTopology: true,useFindAndModify:false, connectTimeoutMS: 60000};
mongoose.connect(process.env.MONGODB_URI || URI, mongoOptions);
mongoose.connection.on('open',()=>{
    console.log('server has been connected to database');
    });
    const NODE_ENV = 'developement';
    const IN_PROD = NODE_ENV === 'production';
    const SESS_LIFETIME = 1000*60*60*2;
    console.log(SESS_LIFETIME)
harmony.use(session({
    secret:'swagger',
    resave:false,
    saveUninitialised:false,
    cookie:{
    
    sameSite:true
    }
}))

//
// function IsAuthenticated(req, res, next) {
 //   if (req.session.user) {
 //     next();
 ///   } else {
 //     return res.render('login', {ua:false, pm:false});
 //   }
 // }
// POST route from contact form

harmony.get('/',async function(req,res){
      res.render('index');
    })


harmony.listen(process.env.PORT || 3000);
console.log('Server listening at 127.0.0.1/3000');
