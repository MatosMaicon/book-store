const { Book } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const books = await Book.findAll()

            return res.json(books)
        } catch(err){
            console.log(err)

            return res.status(400).json({erro: err})
        }
    },

    async store(req, res){
        try{
            const book = await Book.create(req.body)
            
            return res.json(book)
        }catch(err){
            console.log(err)

            return res.status(400).json({erro: err})
        }
    },

    async update(req, res){
        const book = await Book.findByPk(req.params.id)
        if(book === null){
            return res.status(400).json({message: "Livro não encontrado!"})
        }

        try{
            await book.update(req.body)
            return res.json(book)
        }catch(err){
            console.log(err)

            return res.status(400).json({erro: err})
        }
    },

    async destroy(req, res){
        const book = await Book.findByPk(req.params.id)

        if(book === null){
            return res.status(400).json({message: "Livro não encontrado!"})
        }

        try{
            await book.destroy()

            return res.json(book)
        }catch(err){
            console.log(err)

            return res.status(400).json({erro: err})
        }
    }
}