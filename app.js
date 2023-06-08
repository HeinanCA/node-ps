const express = require('express');
const morgan = require("morgan");
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');

// Here goes environment variables
const PORT = process.env.PORT || 3000;
// Here ends environment variables

const app = express();
const sessionsRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

// TODO: Will move this out soon enough to a different function!
sessionsRouter.route('/').get((req, res) => {
    res.render('sessions', {sessions: [
        { title: "Session 1", description: "This is going to be Session no. 1" },
        { title: "Session 2", description: "This is going to be Session no. 2" },
        { title: "Session 3", description: "This is going to be Session no. 3" },
    ]});
});

sessionsRouter.route('/1').get((req, res) => {
    if (req.params.id === "1") {
        res.send("OK");
    } else {
        res.status(404).send("Not found");
    }
});

app.use('/sessions', sessionsRouter);

app.get('/', (req, res) => {
    try {
        res.render('index', { title: "Heinan's website", data: ['a', 'b', 'c']});
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
})

app.listen(PORT, () => {
    debug(`Hello! I'm listening to port: ${chalk.green(PORT)}`);
}).on('error', (error) => {
    console.error(error);
    process.exit(1);
})