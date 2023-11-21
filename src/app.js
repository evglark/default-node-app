const cookieParser = require('cookie-parser');
const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');

const env = require('./helpers/environments');
const router = require('./router');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(cors());

// auth
app.use(session({
	resave: false, // don't save session if unmodified
	saveUninitialized: false, // don't create session until something stored
	secret: env.getEnvironment('SECRET_WORD'),
}));

app.use('/api', router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

module.exports = app;
