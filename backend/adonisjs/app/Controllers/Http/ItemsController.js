'use strict'

const Item = use('App/Models/Item')

/**
 * Resourceful controller for interacting with items
 */
class ItemsController {
  /**
   * Show a list of all items.
   * GET items
   */
  async index () {
    const items = await Item
      .query()
      .with('items')
      .fetch()        

    return items.toJSON()
  }

  /**
   * Create/save a new item.
   * POST items
   */
  async store ({ request }) {
    const data = request.all()

    const item = await Item.create(data)

    return item.toJSON()
  }

  /**
   * Display a single item.
   * GET items/:id
   */
  async show ({ params }) {
    const item = await Item.findOrFail(params.id)

    return item.toJSON()
  }

  /**
   * Update item details.
   * PUT or PATCH items/:id
   */
  async update ({ params, request }) {
    const item = await Item.find(params.id)

    const data = request.all()

    item.merge(data)
    item.save()

    return item.toJSON()
  }

  /**
   * Delete a item with id.
   * DELETE items/:id
   */
  async destroy ({ params }) {
    const item = await Item
      .query()
      .where('id', params.id)            
      .first()

    item.deleted_at = new Date().valueOf()
    item.save()

    return item.toJSON()
  }
}

module.exports = ItemsController
