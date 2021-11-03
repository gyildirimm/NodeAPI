const Info = require('./Info');
const Tags = require('./Tags');

const Definations = require('./definations');
const Paths = require('./paths');


module.exports = {
    ...Info,
    ...Tags,
    ...Paths,
    ...Definations
};
