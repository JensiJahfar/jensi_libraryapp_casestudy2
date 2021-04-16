const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    book:String,
    author: String,
    genre: String,
    image : String,

});
const Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;
