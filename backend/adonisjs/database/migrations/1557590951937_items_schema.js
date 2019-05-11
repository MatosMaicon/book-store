'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemsSchema extends Schema {
  up () {
    this.create('items', (table) => {
      table.increments()      
      table.integer('order_id').unsigned().references('id').inTable('orders')
      table.integer('book_id').unsigned().references('id').inTable('books')

      table.integer('quantity').unsigned()
      table.float('price')
      
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = ItemsSchema
