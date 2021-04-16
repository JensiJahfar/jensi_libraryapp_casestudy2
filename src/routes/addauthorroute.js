const express = require("express");
const addauthorrouter = express.Router();
const Authordata = require('../model/Authordata');

addauthorrouter.get('/',function(req,res){
    res.render('addauthor',{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'},{link:'/addauthor',name:'Add Author'}],
      title:'Library',
    });
});
addauthorrouter.post('/add',function(req,res){
  var item = {
   author: req.body.author,
    genre: req.body.genre,
   image: req.body.image
  }
  var author = Authordata(item);
  author.save();
  res.redirect('/authors');

});
module.exports = addauthorrouter;