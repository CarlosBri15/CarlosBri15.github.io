/* eslint-disable consistent-return */
const Book = require('../models/book');

function getBook(req, res) {
  Book.find({}, (error, book) => {
    if (error) return res.status(500).send({ error });

    return res.status(200).send(book);
  });
}

function getBookByTitle(req, res) {
  const { title } = req.body;

  Book.findOne({ title }, (error, book) => {
    if (!book) return res.status(404).send({ message: 'Book not found' });

    return res.status(200).send(book);
  });
}

function getBookByISBN(req, res) {
  const { ISBN } = req.body;

  Book.findOne({ ISBN }, (error, book) => {
    if (!book) return res.status(404).send({ message: 'Book not found' });

    return res.status(200).send(book);
  });
}

function getBookByDescription(req, res) {
  const { description } = req.body;

  Book.find({ description }, (error, book) => {
    if (!book) return res.status(404).send({ message: 'Book not found' });

    return res.status(200).send(book);
  });
}

function getBookByAuthor(req, res) {
  const { author } = req.body;

  Book.find({ author }, (error, book) => {
    if (!book) return res.status(404).send({ message: 'Book not found' });

    return res.status(200).send(book);
  });
}

function getBookByPublishDate(req, res) {
  const { publishDate } = req.body;

  Book.find({ publishDate }, (error, book) => {
    if (!book) return res.status(404).send({ message: 'Book not found' });

    return res.status(200).send(book);
  });
}

function getBookByPrice(req, res) {
  const { price } = req.body;

  Book.find({ price }, (error, book) => {
    if (!book) return res.status(404).send({ message: 'Book not found' });

    return res.status(200).send(book);
  });
}

function getBookByPublisher(req, res) {
  const { publisher } = req.body;

  Book.find({ publisher }, (error, book) => {
    if (!book) return res.status(404).send({ message: 'Book not found' });

    return res.status(200).send(book);
  });
}

function addBook(req, res) {
  const book = new Book(req.body);

  book.save((error, newBook) => {
    if (error) return res.status(400).send({ message: 'Error saving book', error });

    return res.status(200).send({ message: 'Book saved', newBook });
  });
}

function replaceBook(req, res) {
  const { title } = req.body;
  const { ISBN } = req.body;
  const { description } = req.body;
  const { author } = req.body;
  const { publishDate } = req.body;
  const { price } = req.body;
  const { publisher } = req.body;

  if (!title || !ISBN || !description || !author || !publishDate || !price || !publisher) {
    return res.status(400).send({ message: 'Missing params' });
  }

  const bookReplacement = req.body;

  Book.find({ title }, (err, book) => {
    if (err) return res.status(404).send({ message: 'Book not found', err });

    Book.replaceOne(bookReplacement, (error) => {
      if (error) return res.status(500).send({ error });

      return res.status(200).send({ message: 'Book replaced' });
    });
  });
}

function updateBook(req, res) {
  const { ISBN } = req.body;

  Book.findOneAndUpdate({ ISBN }, (error, book) => {
    if (error) return res.status(500).send({ error });

    return res.status(200).send({ message: 'Book updated', book });
  });
}

function deteleBook(req, res) {
  const { ISBN } = req.body;

  Book.findOneAndRemove({ ISBN }, (error, book) => {
    if (error) return res.status(500).send({ error });
    if (!book) return res.status(404).send({ message: 'Book not found' });

    return res.status(200).send({ message: 'Book deleted ' });
  });
}

module.exports = {
  getBook,
  getBookByTitle,
  getBookByISBN,
  getBookByDescription,
  getBookByAuthor,
  getBookByPublishDate,
  getBookByPrice,
  getBookByPublisher,
  addBook,
  replaceBook,
  updateBook,
  deteleBook,
};
