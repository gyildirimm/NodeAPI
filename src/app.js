const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const configs = require('./config');
configs();

const loaders = require('./loaders');
loaders();

var swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./swagger")

const { ProjectRoutes, UserRoutes } = require('./api-routes');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/projects', ProjectRoutes);
app.use('/users', UserRoutes);

app.listen(process.env.APP_PORT, () => {
    console.log("Sunucu ayağa kalktı")
});