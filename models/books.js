let books = require('../data/books.json')
const filename = './data/books.json'
const helper = require('../helpers/helper.js')
function getBooks() {
    return new Promise((resolve, reject) => {
        if (books.length === 0) {
            reject("Failed")
        }

        resolve(books)
    })
}

function getBook(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(books, id)
        .then(book => resolve(book))
        .catch(err => reject(err))
    })
}

function insertBook(newBook) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(books) }
        newBook = { ...id,  ...newBook } 
        
        books.push(newBook)
        helper.writeJSONFile(filename, books)
        resolve(newBook)
    })
}

function updateBook(id, newBook) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(books, id)
        .then(book => {
            const index = books.findIndex(b => b.id == book.id)
            id = { id: book.id } 
            console.log(newBook)
            books[index] = { ...id,  ...newBook } 
            console.log(books[index]);
            helper.writeJSONFile(filename, books)
            resolve(books[index])
        })
        .catch(err => reject(err))
    })
}

function deleteBook(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(books, id)
        .then(() => {
            books = books.filter(b => b.id != id)  
            helper.writeJSONFile(filename, books)
            resolve("Success")
        })
        .catch(err => reject(err))
    })
}

module.exports = {
    insertBook,
    getBooks,
    getBook, 
    updateBook,
    deleteBook
}