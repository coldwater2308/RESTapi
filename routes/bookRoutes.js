const express = require("express");
const booksControllers= require("../controllers/books")
const router = express.Router();
router.get('/',booksControllers.getBooks)
router.get('/book/:id',booksControllers.getBook)
router.post('/create',booksControllers.createBook)
router.patch('/update/:id',booksControllers.updateBook)
router.delete('/delete/:id',booksControllers.deleteBook)
module.exports= router;