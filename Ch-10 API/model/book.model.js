const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    publishedYear: {
        type: Number,
        required: true
    }
});

const bookModel = mongoose.model("Books", bookSchema, "Books");

module.exports = bookModel;
