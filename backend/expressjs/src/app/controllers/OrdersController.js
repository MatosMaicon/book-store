const db = require('../models')
const { Order, Item, User, Book } = require('../models')

class OrdersController {
    async index(req, res) {
        try {
            const orders = await Order.findAll({
                include: [
                    {model: Item, include: [{ model: Book }]}, 
                    {model: User}
                ]
            })

            return res.json(orders)
        } catch(err){
            return res.status(400).json({erro: err})
        }
    }

    async show(req, res) {
        try {
            const order = await Order.findByPk(req.params.id)

            return res.json(order)
        } catch(err){
            return res.status(400).json({erro: err})
        }
    }

    async store(req, res){
        const transaction = await db.sequelize.transaction();
        try{
            const order = await Order.create(req.body, {transaction})
            for(item of req.body.items){
                await Item.create({ ...item, order_id: order.id }, {transaction})
            }

            // commit
            await transaction.commit();
            return res.json(order)
        }catch(err){
            await transaction.rollback();
            return res.status(400).json({erro: err})
        }
    }

    async update(req, res){
        const order = await Order.findByPk(req.params.id)
        if(!order)
            return res.status(400).json({message: "Order not found!"})

        const transaction = await db.sequelize.transaction();
        try{
            await order.update(req.body, {transaction})
           
            //Update Items
            for(item of req.body.items){
                const modelItem = await Item.findOne({ where: {order_id: order.id, book_id: item.book_id} })

                if(!modelItem){
                    await Item.create({ ...item, order_id: order.id }, {transaction})
                }else{
                    await modelItem.update(item, {transaction})
                }
            }

            // commit
            await transaction.commit();
            return res.json(order)
        }catch(err){
            await transaction.rollback();
            return res.status(400).json({erro: err})
        }
    }

    async destroy(req, res){
        const order = await Order.findByPk(req.params.id)

        if(!order)
            return res.status(400).json({message: "Order not found!"})

        try{
            await order.destroy()

            return res.json(order)
        }catch(err){
            return res.status(400).json({erro: err})
        }
    }
}

module.exports = new OrdersController();