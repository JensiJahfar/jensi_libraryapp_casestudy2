const express = require("express");
const addauthorrouter = express.Router();

addauthorrouter.get('/',function(req,res){
    res.render('addauthor',{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'},{link:'/addauthor',name:'Add Author'}],
      title:'Library',
    });
});
addauthorrouter.get('/add',function(req,res){
  res.send("Hey I am added");
});
module.exports = addauthorrouter;