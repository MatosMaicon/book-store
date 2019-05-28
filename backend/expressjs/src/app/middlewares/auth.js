const jwt = require('jsonwebtoken');

class Auth {
    constructor() {
        this.isAdmin = this.isAdmin.bind(this);
    }

    authorize(req, res, next) {
        const authHeader = req.headers.authorization;

        if (!authHeader)
            return res.status(401).send({ error: 'No token provided' });

        const parts = authHeader.split(' ');

        if (!parts.length === 2)
            return res.status(401).send({ error: 'Token error' });

        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme))
            return res.status(401).send({ error: 'Token malformatted' });

        jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
            if (err) return res.status(401).send({ error: 'Token invalid' })

            req.userId = decoded.id;
            req.userRole = decoded.role;
            return next();
        })
    }

    isAdmin(req, res, next) {
        return this.authorize(req, res, () => {
            if (req.userRole !== 'admin') return res.status(403).send({ error: 'Forbidden' })

            return next();
        })
    }
}

module.exports = new Auth();