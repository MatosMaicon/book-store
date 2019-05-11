'use strict'

const Book = use('App/Models/Book')

/**
 * Resourceful controller for interacting with books
 */
class BooksController {
  /**
   * Show a list of all books.
   * GET books
   */
  async index () {
    const books = await Book
      .query()
      .with('items')
      .fetch()        

    return books.toJSON()
  }

  /**
   * Create/save a new book.
   * POST books
   */
  async store ({ request }) {
    const data = request.all()

    const book = await Book.create(data)

    return book.toJSON()
  }

  /**
   * Display a single book.
   * GET books/:id
   */
  async show ({ params }) {
    const book = await Book.findOrFail(params.id)

    return book.toJSON()
  }

  /**
   * Update book details.
   * PUT or PATCH books/:id
   */
  async update ({ params, request }) {
    const book = await Book.find(params.id)

    const data = request.all()

    book.merge(data)
    book.save()

    return book.toJSON()
  }

  /**
   * Delete a book with id.
   * DELETE books/:id
   */
  async destroy ({ params }) {
    const book = await Book
      .query()
      .where('id', params.id)            
      .first()

    book.deleted_at = new Date().valueOf()
    book.save()

    return book.toJSON()
  }
}

module.exports = BooksController
