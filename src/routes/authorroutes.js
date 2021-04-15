const express = require("express");
const authorsrouter = express.Router();

var Authors = [
    {
      Author :' Chetan Bhagat',
      img : 'chetan.jpg',
      Profile : 'Chetan Bhagat (born 22 April 1974) is an Indian author and columnist. He was included in Time magazines list of Worlds 100 Most Influential People in 2010. Bhagat graduated in mechanical engineering at IIT Delhi and completed a masters of business administration degree at IIM Ahmedabad.'

    },
    {
      Author :' Arundathy Roy',
      img : 'Arundathy.jpg',
      Profile : 'Suzanna Arundhati Roy (born 24 November 1961) is an Indian author best known for her novel The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997 and became the best-selling book by a non-expatriate Indian author.'
    },
    {
      Author :' Ruskin Bond',
      img : 'Ruskin.jpg',
      Profile : 'Ruskin Bond (born 19 May 1934) is an Indian author of British descent. He lives with his adopted family in Landour, Mussoorie, India. The Indian Council for Child Education has recognised his role in the growth of childrens literature in India.'
    },
    {
      Author :'J K Rowling',
      img : 'Rowling.jpg',
      Profile : 'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling; born 31 July 1965), better known by her pen name J. K. Rowling, is a British author and philanthropist.'
    },
    {
      Author :'Anne Perry',
      img : 'perry.jpg',
      Profile : 'Anne Perry (born Juliet Marion Hulme; 28 October 1938) is an English author of historical detective fiction, best known for her Thomas Pitt and William Monk series. In 1954, at the age of fifteen, she was convicted in the murder of her friends mother. She changed her name after serving a five-year sentence.'
    }
  ];
  
  authorsrouter.get('/',function(req,res){
    res.render("authors",{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'},{link:'/addauthor',name:'Add Author'}],
      title:'Library',
      Authors
    });
   
  });
  authorsrouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render('author',{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'},{link:'/addauthor',name:'Add Author'}],
      title:'Library',
      Author:Authors[id]
    });
  });
  module.exports = authorsrouter;