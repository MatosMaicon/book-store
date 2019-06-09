const db = require('../models')
const { Order, Item } = require('../models')

class OrdersController {
    async index(req, res) {
        try {
            let condition = {}
            if (req.userRole === 'client')
                condition = { userId: req.userId }

            const orders = await Order.findAll({
                include: [
                    { association:'items', include: [{ association: 'product' }] },
                    { association: 'user' }
                ],
                where: condition
            })

            return res.json(orders)
        } catch (err) {
            return res.status(400).json({ erro: err })
        }
    }

    async show(req, res) {
        try {
            const order = await Order.findByPk(req.params.id)

            return res.json(order)
        } catch (err) {
            return res.status(400).json({ erro: err })
        }
    }

    async store(req, res) {
        const transaction = await db.sequelize.transaction();
        try {
            const order = await Order.create(req.body, { transaction })

            // bulk create, Items
            await Item.bulkCreate(req.body.items.map(item => ({
                ...item,
                orderId: order.id,
            })), { transaction });

            // commit
            await transaction.commit();
            return res.json(order)
        } catch (err) {
            await transaction.rollback();
            return res.status(400).json({ erro: err })
        }
    }

    async update(req, res) {
        const order = await Order.findByPk( req.params.id, {include: [{ association: "items" }]})
        if (!order)
            return res.status(400).json({ message: "Order not found!" })

        const transaction = await db.sequelize.transaction();
        try {
            await order.update(req.body, { transaction })            
            await Item.destroy({ where: { orderId: order.id }, transaction })

            // bulk create, Items
            await Item.bulkCreate(req.body.items.map(item => ({
                ...item,
                orderId: order.id,
            })), { transaction });

            // commit
            await transaction.commit();
            return res.json(order)
        } catch (err) {
            await transaction.rollback();
            return res.status(400).json({ erro: err })
        }
    }

    async destroy(req, res) {
        const order = await Order.findByPk(req.params.id)

        if (!order)
            return res.status(400).json({ message: "Order not found!" })

        try {
            await order.destroy()

            return res.json(order)
        } catch (err) {
            return res.status(400).json({ erro: err })
        }
    }
}

module.exports = new OrdersController();