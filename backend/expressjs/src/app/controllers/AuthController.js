const bcrypt = require('bcryptjs');

const { User } = require('../models')

class AuthController {
    async authenticate(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email })

            if(!user)
                return res.status(400).send({ error: 'User not found' });

            if(!await bcrypt.compare(password, user.password))
                return res.status(401).send({ error: 'Invalid password' });

            user.password = undefined;

            res.send({ 
                user, 
                token: await user.generateToken() 
            });
        } catch(err){
            return res.status(400).json({erro: err})
        }
    }
}

module.exports = new AuthController();