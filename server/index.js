const express = require('express');
const path = require('path');
const parser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const db = require('../database/')
const PORT = 1337;
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, './static')));

app.listen(PORT, () => {console.log(`<========== Server is Up ==========>`)});