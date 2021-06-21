require('dotenv').config();

const express = require('express');
const router = require('./routers/router');
const port = process.env.PORT || 3000;

const app = express();
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});