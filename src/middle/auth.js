const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');


module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({ erro: 'Token não informado' });

    const parts = authHeader.split(' ');

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ erro: 'Token mal formatado'});

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ erro: 'Token inválido'});

        req.userId = decoded.id;
        return next();

    });
}