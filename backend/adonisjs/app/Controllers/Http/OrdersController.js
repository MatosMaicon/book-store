'use strict'

const Order = use('App/Models/Order')

/**
 * Resourceful controller for interacting with orders
 */
class OrdersController {
  /**
   * Show a list of all orders.
   * GET orders
   */
  async index () {
    const orders = await Order
      .query()
      .with('orders')
      .fetch()        

    return orders.toJSON()
  }

  /**
   * Create/save a new order.
   * POST orders
   */
  async store ({ request }) {
    const data = request.all()

    const order = await Order.create(data)

    return order.toJSON()
  }

  /**
   * Display a single order.
   * GET orders/:id
   */
  async show ({ params }) {
    const order = await Order.findOrFail(params.id)

    return order.toJSON()
  }

  /**
   * Update order details.
   * PUT or PATCH orders/:id
   */
  async update ({ params, request }) {
    const order = await Order.find(params.id)

    const data = request.all()

    order.merge(data)
    order.save()

    return order.toJSON()
  }

  /**
   * Delete a order with id.
   * DELETE orders/:id
   */
  async destroy ({ params }) {
    const order = await Order
      .query()
      .where('id', params.id)            
      .first()

    order.deleted_at = new Date().valueOf()
    order.save()

    return order.toJSON()
  }
}

module.exports = OrdersController
