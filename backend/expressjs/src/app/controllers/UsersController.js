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
            const params = await User.params(req.body)
            const user = await User.create(params)
            
            user.password = undefined;
            return res.send({ 
                user, 
                token: await user.generateToken() 
            });
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
            const params = await User.params(req.body)
            await user.update(params)

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