const { User } = require('../models')

class UsersController {
    async index(req, res) {
        try {
            const users = await User.findAll()

            return res.json(users)
        } catch(err){
            return res.status(400).json({erro: err})
        }
    }

    async store(req, res){
        try{
            const user = await User.create(User.params(req.body))
            
            user.password = undefined;
            return res.json(user)
        }catch(err){
            return res.status(400).json({erro: err})
        }
    }

    async update(req, res){
        const user = await User.findByPk(req.params.id)
        if(user === null){
            return res.status(400).json({message: "Usuario not found!"})
        }

        try{
            await user.update(User.params(req.body))

            user.password = undefined;
            return res.json(user)
        }catch(err){
            return res.status(400).json({erro: err})
        }
    }

    async destroy(req, res){
        const user = await User.findByPk(req.params.id)

        if(user === null){
            return res.status(400).json({message: "Usuario not found!"})
        }

        try{
            await user.destroy()

            return res.json(user)
        }catch(err){
            return res.status(400).json({erro: err})
        }
    }
}

module.exports = new UsersController();