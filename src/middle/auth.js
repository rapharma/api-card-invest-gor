const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');


module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({ error: 'Token not provided' });

    const parts = authHeader.split(' ');

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token malformed'});

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token invalid'});

        req.userId = decoded.id;
        return next();

    });
}