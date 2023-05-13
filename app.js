const express = require('express');
const morgan = require("morgan");
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');

// Here goes environment variables
const PORT = process.env.PORT || 3000;
// Here ends environment variables

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.send("Hello from Heinan Cabouly application!");
})

app.listen(PORT, () => {
    debug(`Hello! I'm listening to port: ${chalk.green(PORT)}`);
})