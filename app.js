var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');
var cors = require('cors');
var db = require('./DB/app')
db.on('error',console.error.bind(
  console,'mongoDB connection error'
));
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var instructorsRouter = require('./routes/instructor-route');
var rolesRouter = require('./routes/role-route');
var subjectsRouter = require('./routes/subject-route')
var customersRouter = require('./routes/customer-route');
var lectureRouter = require('./routes/lecture-route')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended:true}))

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//damo
// Added to serve client static files
app.use(express.static(path.resolve(__dirname, 'client/build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/instructors',instructorsRouter);
app.use('/roles',rolesRouter);
app.use('/subjects',subjectsRouter);
app.use('/api/customers',customersRouter);
app.use('/api/lectures',lectureRouter)


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


