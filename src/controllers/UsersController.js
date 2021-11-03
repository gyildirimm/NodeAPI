const {insert, list, loginUser} = require('../services/UserService');
const httpStatus = require('http-status');
const { passwordToHashWithEmail, generateAccessToken, generateRefreshToken } = require('../scripts/helpers/CryptoHelper');

const create = (req, res) => {
    req.body.password = passwordToHashWithEmail(req.body.password, req.body.email);

    insert(req.body)
        .then(cRes => { res.status(httpStatus.CREATED).send(cRes); })
        .catch(e => { res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e); });
}

const index = (req, res) => {
    list()
        .then(cRes => { res.status(httpStatus.OK).send(cRes); })
        .catch(e => { res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e); })
}

const login = (req, res) => {
    req.body.password = passwordToHashWithEmail(req.body.password, req.body.email);

    loginUser(req.body)
        .then(user => { 
            if(!user) return res.status(httpStatus.NOT_FOUND).send({message: 'Email veya password hatalı'});
            user = {...user.toObject()};
            user = {
                ...user,
                tokens: {
                    access_token: generateAccessToken(user),
                    refresh_token: generateRefreshToken(user)
                },
            };

            delete user.password;

            res.status(httpStatus.OK).send(user); 
        })
        .catch(e => { res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e); })
}

module.exports = {
    create,
    index,
    login
};
