const Sequelize = require('sequelize');
const db = require('../config/db');

const Book = db.define('book', {
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    }
});

module.exports = Book;