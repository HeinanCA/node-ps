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

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: "Heinan's website", data: ['a', 'b', 'c']});
})

app.listen(PORT, () => {
    debug(`Hello! I'm listening to port: ${chalk.green(PORT)}`);
})