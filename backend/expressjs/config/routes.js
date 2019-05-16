const BooksController = require('../app/controllers/BooksController')

module.exports = app => {
    app.group("/api/v1/", (router) => { 
        router.group("/books", (router) => {
            router.get('/', BooksController.index);
            router.post('/', BooksController.store);
            router.put('/:id', BooksController.update);    
            router.delete('/:id', BooksController.destroy);    
        })
    })
}