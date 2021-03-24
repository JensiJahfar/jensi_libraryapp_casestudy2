const express = require("express");
const booksrouter = express.Router();
var books = [
    {
      title : 'Harry Potter',
      author : 'J K Rowling',
      genre : 'Fantasy',
      img : 'harry.jpg'
        },
    {
      title : 'Tom and Jerry',
      author : 'Joseph Barbera',
      genre : 'Cartoon',
      img : 'jerry.jpg'
        },
        {
          title : 'Midnight Sun',
          author : 'Stephen Meyer',
          genre : 'Fantasy&Novel',
          img : 'midnight.jpg'
            }
  ];
  booksrouter.get('/',function(req,res){
    res.render("books",{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
      title:'Library',
      books
    });
   
  });
  booksrouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render('book',{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
      title:'Library',
      book:books[id]
    })
  });

  module.exports = booksrouter;