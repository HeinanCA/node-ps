const express = require('express');
const morgan = require("morgan");
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.send("Hello from Heinan Cabouly application!");
})

app.listen(3000, () => {
    debug(`Hello! I'm listening on port: ${chalk.green('3000')}`);
})