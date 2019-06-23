const fs = require('fs');

const { Product } = require('../models')

class ProductsController {
    async index(req, res) {
        try {
            const products = await Product.findAll({
                where: {active: true}
                //attributes: ['name', 'description', 'price', 'active','image']
            })

            return res.json(products)
        } catch(err){
            return res.status(400).json({erro: err})
        }
    }

    async show(req, res) {
        try {
            const product = await Product.findByPk(req.params.id)

            return res.json(product)
        } catch(err){
            return res.status(400).json({erro: err})
        }
    }

    async store(req, res){
        try{
            const product = await Product.create({...req.body, image: req.file.filename})
            return res.json(product)
        }catch(err){
            return res.status(400).json({erro: err})
        }
    }

    async update(req, res){
        const product = await Product.findByPk(req.params.id)
        if(product === null){
            return res.status(400).json({message: "Product not found!"})
        }
        
        try{
            let attributes = req.body
            //apaga imagem antiga se uma nova for passada
            if (!!req.file){
                fs.unlink(`./public/images/product/${product.image}`, (err) => {
                    if (err) throw err;
                });

                attributes = {...attributes, image: req.file.filename}
            }else{
                delete attributes.image;
            }

            await product.update(attributes)
            return res.json(product)
        }catch(err){
            return res.status(400).json({erro: err})
        }
    }

    async destroy(req, res){
        const product = await Product.findByPk(req.params.id)

        if(product === null){
            return res.status(400).json({message: "Livro not found!"})
        }

        try{
            await product.destroy()

            //apaga imagem
            fs.unlink(`./public/images/product/${product.image}`, (err) => {
                if (err) throw err;
            });

            return res.json(product)
        }catch(err){
            return res.status(400).json({erro: err})
        }
    }
}

module.exports = new ProductsController();