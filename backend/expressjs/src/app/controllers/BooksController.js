const fs = require('fs');

const { Book } = require('../models')

class BooksController {
    async index(req, res) {
        try {
            const books = await Book.findAll({
                //attributes: ['name', 'description', 'price', 'active','image']
            })

            return res.json(books)
        } catch(err){
            return res.status(400).json({erro: err})
        }
    }

    async show(req, res) {
        try {
            const book = await Book.findByPk(req.params.id)

            return res.json(book)
        } catch(err){
            return res.status(400).json({erro: err})
        }
    }

    async store(req, res){
        try{
            const book = await Book.create({...req.body, image: req.file.filename})
            return res.json(book)
        }catch(err){
            return res.status(400).json({erro: err})
        }
    }

    async update(req, res){
        const book = await Book.findByPk(req.params.id)
        if(book === null){
            return res.status(400).json({message: "Livro not found!"})
        }
        
        try{
            let attributes = req.body
            //apaga imagem antiga se uma nova for passada
            if (!!req.file){
                fs.unlink(`./public/images/book/${book.image}`, (err) => {
                    if (err) throw err;
                });

                attributes = {...attributes, image: req.file.filename}
            }

            await book.update(attributes)
            return res.json(book)
        }catch(err){
            return res.status(400).json({erro: err})
        }
    }

    async destroy(req, res){
        const book = await Book.findByPk(req.params.id)

        if(book === null){
            return res.status(400).json({message: "Livro not found!"})
        }

        try{
            await book.destroy()

            //apaga imagem
            fs.unlink(`./public/images/book/${book.image}`, (err) => {
                if (err) throw err;
            });

            return res.json(book)
        }catch(err){
            return res.status(400).json({erro: err})
        }
    }
}

module.exports = new BooksController();