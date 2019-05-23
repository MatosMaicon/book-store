const AuthController = require('../app/controllers/AuthController')
const BooksController = require('../app/controllers/BooksController')
const UsersController = require('../app/controllers/UsersController')
const OrdersController = require('../app/controllers/OrdersController')

const authMiddleware = require('../app/middlewares/auth')
const uploadMiddleware = require('../app/middlewares/upload')

module.exports = app => {
    app.group("/api/v1/", (router) => { 
        router.group("/books", (router) => {
            router.get('/', BooksController.index);
            //router.post('/', authMiddleware, BooksController.store);
            router.post('/', [authMiddleware, uploadMiddleware('book').single('image')], BooksController.store);
            router.put('/:id', [authMiddleware, uploadMiddleware('book').single('image')], BooksController.update);    
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
