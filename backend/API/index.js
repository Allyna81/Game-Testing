if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const router = require('./app/routers/router');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);

const port = process.env.PORT || 3000;

let options = {
    swaggerDefinition: {
        info: {
            description: 'API for gaming reviews',
            title: 'gameTesting',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/',
        produces: [
            "application/json"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./app/routers/*.js', './app/dataMappers/*.js'] //Path to the API handle folder
};
expressSwagger(options);

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});