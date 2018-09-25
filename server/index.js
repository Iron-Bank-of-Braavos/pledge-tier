const express = require('express');
const path = require('path');
const parser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const db = require('../database/')
const router = require('./routes.js');
const cors = require('cors');
const PORT = 3003;
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../static/')));
app.use('/api', router);

app.listen(PORT, () => {console.log(`<========== Server is Up ==========>`)});