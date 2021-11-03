const {insert, list} = require('../services/ProjectService');
const httpStatus = require('http-status');

const create = (req, res) => {
    insert(req.body)
        .then(cRes => { res.status(httpStatus.CREATED).send(cRes); })
        .catch(e => { res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e); });
}

const index = (req, res) => {
    list()
        .then(cRes => { res.status(httpStatus.OK).send(cRes); })
        .catch(e => { res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e); })
}

module.exports = {
    create,
    index,
};
