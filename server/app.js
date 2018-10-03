const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;

const users = require('./routes/api/users');
const currency = require('./routes/api/currency');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users',users);
app.use('/api/currency',currency);

app.listen(port, () => console.log(`listening on port: ${port}`));
