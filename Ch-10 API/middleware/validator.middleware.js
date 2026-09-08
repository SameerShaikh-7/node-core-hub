const { body, validationResult } = require('express-validator');

const validatorList = [
    body('title').notEmpty()
        .withMessage("Book title is required...")
        .isLength({ min: 2, max: 100 }).withMessage("Title must be between 2 and 100 characters"),

    body('author').trim().notEmpty()
        .withMessage("Author name is required..."),

    body('price').notEmpty()
        .withMessage("Price is required...")
        .isNumeric()
        .withMessage("Price must be a number"),

    body('category').notEmpty()
        .withMessage("Category is required..."),

    body('publishedYear').notEmpty()
        .withMessage("Published year is required...")
        .isNumeric()
        .withMessage("Published year must be a valid year")
];

const validation = (req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ status: 400, message: error.array(), error: true });
    }

    next();
};

module.exports = {
    validatorList,
    validation
};
