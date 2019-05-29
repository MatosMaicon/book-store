const AuthController = require('../app/controllers/AuthController')
const ProductsController = require('../app/controllers/ProductsController')
const UsersController = require('../app/controllers/UsersController')
const OrdersController = require('../app/controllers/OrdersController')

const authMiddleware = require('../app/middlewares/auth')
const uploadMiddleware = require('../app/middlewares/upload')

module.exports = app => {
    app.group("/api/v1/", (router) => { 
        router.group("/products", (router) => {
            router.get('/', ProductsController.index);
            router.get('/:id', ProductsController.show);
            router.post('/', [authMiddleware.isAdmin, uploadMiddleware('product')], ProductsController.store);
            router.put('/:id', [authMiddleware.isAdmin, uploadMiddleware('product')], ProductsController.update);    
            router.delete('/:id', authMiddleware.isAdmin, ProductsController.destroy);    
        })

        router.group("/users", (router) => {
            router.get('/', authMiddleware.isAdmin, UsersController.index);
            router.post('/', UsersController.store);
            router.put('/:id', authMiddleware.authorize, UsersController.update);    
            router.delete('/:id', authMiddleware.isAdmin, UsersController.destroy);    
        })

        router.group("/orders", (router) => {
            router.get('/', authMiddleware.authorize, OrdersController.index);
            router.get('/:id', authMiddleware.authorize, OrdersController.show);
            router.post('/', authMiddleware.authorize, OrdersController.store);
            router.put('/:id', authMiddleware.isAdmin, OrdersController.update);    
            router.delete('/:id', authMiddleware.isAdmin, OrdersController.destroy);    
        })

        router.post('/authenticate', AuthController.authenticate);    
    })
}
