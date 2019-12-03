const express = require('express');
const bookController = require('../controllers/bookController');

const book = express.Router();

book.get('/', bookController.getBook);
book.get('/title', bookController.getBookByTitle);
book.get('/ISBN', bookController.getBookByISBN);
book.get('/description', bookController.getBookByDescription);
book.get('/author', bookController.getBookByAuthor);
book.get('/publishDate', bookController.getBookByPublishDate);
book.get('/price', bookController.getBookByPrice);
book.get('/publisher', bookController.getBookByPublisher);
book.post('/', bookController.addBook);
book.put('/:ISBN', bookController.replaceBook);
book.patch('/:ISBN', bookController.updateBook);
book.delete('/:ISBN', bookController.deteleBook);

module.exports = book;
