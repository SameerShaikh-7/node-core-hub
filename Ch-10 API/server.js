require('dotenv').config();
const express = require('express');

require('./config/db.config');

const bookModel = require('./model/book.model');
const { validatorList, validation } = require('./middleware/validator.middleware');

const app = express();

// Built-In Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// APIs

// 1. Insert Book API
app.post('/addBook', validatorList, validation, (req, res) => {
    console.log("Book Body : ", req.body);

    bookModel.create(req.body).then(() => {
        return res.status(201).json({ status: 201, message: "Book added successfully...", error: false });
    }).catch((error) => {
        console.log('Insert Book Error : ', error);
        return res.status(400).json({ status: 400, message: "Book addition failed...", error: true });
    });
});

// 2. Fetch All Books API
app.get('/allBooks', (req, res) => {
    bookModel.find({}).then((result) => {
        console.log("All Books : ", result);
        return res.status(200).json({ status: 200, message: "All books fetched successfully...", allBooks: result, error: false, totalBooks: result.length });
    }).catch((error) => {
        console.log("Fetch Error : ", error);
        return res.status(400).json({ message: "All books fetch failed...", error: true });
    });
});

// 3. Delete Book API
app.delete('/deleteBook', (req, res) => {
    console.log(req.query.id);

    bookModel.findById(req.query.id).then((result) => {
        console.log("Delete : ", result);

        if (result != null) {
            bookModel.findByIdAndDelete(req.query.id).then(() => {
                return res.status(200).json({ status: 200, message: "Book deleted successfully.", error: false });
            }).catch((error) => {
                console.log("Deletion Error : ", error);
                return res.status(400).json({ message: "Book deletion failed...", error: true });
            });
        } else {
            return res.status(404).json({ status: 404, message: "Book not found...", error: true });
        }
    }).catch((error) => {
        console.log("Find Book Deletion Error : ", error);
        return res.status(404).json({ message: "Book not found...", error: true });
    });
});

// 4. Update Book API
app.patch('/updateBook/:bookID', (req, res) => {
    console.log(req.params);

    bookModel.findByIdAndUpdate(req.params.bookID, req.body).then(() => {
        return res.status(200).json({ status: 200, message: "Book updated successfully.", error: false });
    }).catch((error) => {
        console.log("Book Updation Error : ", error);
        return res.status(400).json({ message: "Book updation failed...", error: true });
    });
});

// 5. Single Book Fetch API
app.get('/singleBook', (req, res) => {
    return res.json({ message: "Single Book fetched successfully.." });
});

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log("Error : ", err);
        return;
    }
    console.log(`Server is running on port ${process.env.PORT}...`);
});
