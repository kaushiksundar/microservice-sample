const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(cors());

const { catchAll, notFound } = require('./error');
const heroesRouter = require('./heroes/heroes.router');
const moviesRouter = require('./movies/movies.router');
const pythonLibsRouter = require('./python_libs/python_libs.router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'GATEWAY!' });
});

app.use('/api/heroes', heroesRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/python_libs', pythonLibsRouter);

app.use(notFound);
app.use(catchAll);

module.exports = app;
