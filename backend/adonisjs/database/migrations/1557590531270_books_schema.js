'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()      

      table.string('name', 80).notNullable()
      table.text('description')
      table.float('price')
      table.boolean('active')
      
      table.timestamps()
      table.timestamp('deleted_at')
      table.timestamp('inactivated_at')
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BooksSchema
