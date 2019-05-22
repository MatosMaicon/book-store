const AuthController = require('../src/controllers/AuthController')
const BooksController = require('../src/controllers/BooksController')
const UsersController = require('../src/controllers/UsersController')
const OrdersController = require('../src/controllers/OrdersController')

const authMiddleware = require('../src/middlewares/auth')

module.exports = app => {
    app.group("/api/v1/", (router) => { 
        router.group("/books", (router) => {
            router.get('/', BooksController.index);
            router.post('/', authMiddleware, BooksController.store);
            router.put('/:id', authMiddleware, BooksController.update);    
            router.delete('/:id', authMiddleware, BooksController.destroy);    
        })

        router.group("/users", (router) => {
            router.get('/', authMiddleware, UsersController.index);
            router.post('/', UsersController.store);
            router.put('/:id', authMiddleware, UsersController.update);    
            router.delete('/:id', authMiddleware, UsersController.destroy);    
        })

        router.group("/orders", (router) => {
            router.use(authMiddleware)

            router.get('/', OrdersController.index);
            router.post('/', OrdersController.store);
            router.put('/:id', OrdersController.update);    
            router.delete('/:id', OrdersController.destroy);    
        })

        router.post('/authenticate', AuthController.authenticate);    
    })
}
