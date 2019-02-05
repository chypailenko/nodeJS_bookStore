const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

router.get('/', (req, res) => {
    Book.findAll()
        .then(data => res.send(data))
        .catch(err => console.log(err))
});

router.get('books/:id', (req, res) => {

    const id = req.params.id;

    Book.findById(id)
        .then(book => res.send(book))
        .catch(err => console.log(err))
});

router.post('/', (req, res) => {

    const { author, title } = req.body;

    Book.create({
            title,
            author
        })
        .then(book => res.status(200).json({
            message: 'Book created'
        }))
        .catch(err => res.json({
            msg: 'There were some problems'
        }))
});

router.put('/:id', (req, res) => {
   const id = req.params.id;

   const { author, title } = req.body;

    Book.update(
        { title, author },
        { where: {
            id: id
            } }
    )
        .then(function(rowsUpdated) {
            res.json({
                msg: 'Book updated'
            })
            // res.json(rowsUpdated)
        })
        .catch(err => console.log(err))

});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Book.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).json({
            msg: 'Book deleted'
        })
    }).catch(err => {
        console.log(err);
    })
});

module.exports = router;