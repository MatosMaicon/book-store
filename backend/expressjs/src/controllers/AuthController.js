const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth')

const { User } = require('../models')

module.exports = {
    async authenticate(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email })

            if(!user)
                return res.status(400).send({ error: 'User not found' });

            if(!await bcrypt.compare(password, user.password))
                return res.status(400).send({ error: 'Invalid password' });

            user.password = undefined;

            const token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: 86400,
            });

            res.send({ user, token });
        } catch(err){
            return res.status(400).json({erro: err})
        }
    },
}