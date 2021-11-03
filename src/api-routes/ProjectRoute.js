const express = require('express');
const router = express.Router();
const validate = require('../middlewares/Validate');
const validateSchema = require('../validations/ProjectValidation');
const authenticate = require('../middlewares/Authenticate');


const { create, index } = require('../controllers/ProjectsController');

router.route('/').get(authenticate, index);

router
    .route('/')
    .post(validate(authenticate, validateSchema.createValidation), create);


module.exports = router;