const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String, unique: true, required: [true, 'title required'] },
  ISBN: { type: String, unique: true, required: [true, 'ISBN required'] },
  description: { type: String, required: [true, 'description required'] },
  author: { type: String, required: [true, 'author required'] },
  publishDate: { type: Date, required: [true, 'publish date required'] },
  price: { type: Number, required: [true, 'price required'] },
  publisher: { type: String, required: [true, 'publisher required'] },
});

module.exports = mongoose.model('Book', bookSchema);
