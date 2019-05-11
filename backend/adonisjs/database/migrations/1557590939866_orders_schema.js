'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()

      table.integer('user_id').unsigned().references('id').inTable('users')

      table.integer('status').unsigned()
      table.float('total')
      
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrdersSchema
