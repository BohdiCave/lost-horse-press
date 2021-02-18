const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    const searchTerm = req.body;
    const searchFilter = (book, term) => {
        return book.title.includes(term) || book.author.includes(term) 
            || book.blurb.includes(term) || book.bio.includes(term) 
    }
    db.Book
      .findAll({})
      .then(books => { 
        books.filter(book => searchFilter(book, searchTerm));
        res.json(books);
      })
      .catch(err => res.status(422).json(err));
  }
};

