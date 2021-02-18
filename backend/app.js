var createError = require('http-errors');
var express = require('express');
const prometheusMiddleware = require('express-prometheus-middleware');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var nocache = require('nocache');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const timeRouter = require('./routes/time');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(nocache());
app.use(cors({
  origin: 'http://localhost:8080'
}));

// middlewares before routers
app.use(function(req, res, next) {
  if (req.headers.authorization != `mysecrettoken`) {
    return next(createError(403));
  }
  next();
});

app.use(prometheusMiddleware());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/time', timeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
