const express = require('express');
const router = express.Router();
const validate = require('../middlewares/Validate');
const validateSchema = require('../validations/UserValidation');


const { create, index, login } = require('../controllers/UsersController');

router.get('/', index);

router
    .route('/')
    .post(validate(validateSchema.createValidation), create);

router
    .route('/login')
    .post(validate(validateSchema.loginValidation), login)


module.exports = router;