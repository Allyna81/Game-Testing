if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});