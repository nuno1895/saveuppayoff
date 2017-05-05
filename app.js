var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');

//dependacies from older project
var CronJob = require('cron').CronJob;
var mysql = require("mysql");
var request = require("request");

var PORT = process.env.PORT || 3001;

var index = require('./routes/index');
var users = require('./routes/users');
var expenses = require('./routes/expenses');

var app = express();

//auth config start
var cookieParser = require('cookie-parser');

var session = require('express-session');
//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 6*1000*1000*1000*1000*1000*1000 }}));
app.use(cookieParser());
//auth config ends

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//adding mysql
var connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : 'root',
 database : 'saveup_db',
});

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
   next();
 });

app.use('/', index);
// app.use('/users', users);
app.use('/expenses', expenses);

app.get('/users', function(req, res) {
	
    var query = "SELECT * FROM users"

    connection.query(query, function(err, users) {
        res.json(users);
    });
});
app.get('/expenses', function(req, res) {
  
    var query = "SELECT * FROM expenses"

    connection.query(query, function(err, expenses) {
        res.json(expenses);
    });
});

app.get('/sign-out', function(req,res) {
  req.session.destroy(function(err) {
     res.json(true);
  })
});

//if user trys to sign in with the wrong password or email tell them that on the page
app.post('/login', function(req, res) {
  
  var query = "SELECT * FROM users WHERE email = ?";

  connection.query(query, [ req.body.email ], function(err, response) {
      if (response.length == 0){
        res.json({error: 'emailDoesNotExist'})
      }

        bcrypt.compare(req.body.password, response[0].password_hash, function(err, result) {
            if (result == true){

              req.session.logged_in = true;
              req.session.user_id = response[0].id;
              req.session.user_email = response[0].email;
              req.session.username = response[0].username;

              res.json({logged_in: true, user_id: response[0].id, user_email: response[0].email, username: response[0].username});
            }else{
              res.json({error: 'passwordWrong'})
            }
        });
  });
});

app.post('/create', function(req,res) {
  var query = "SELECT * FROM users WHERE email = ?"

  connection.query(query, [ req.body.email ], function(err, response) {
    console.log(response)
    if (response.length > 0) {
        res.json({error: 'emailExistsAlready'})
    }else{

      bcrypt.genSalt(10, function(err, salt) {
          //res.send(salt)
          bcrypt.hash(req.body.password, salt, function(err, hash) {            
            var query = "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)"

            connection.query(query, [ req.body.username, req.body.email, hash ], function(err, response) {

              req.session.logged_in = true;

              req.session.user_id = response.insertId; //only way to get id of an insert for the mysql npm package

              var query = "SELECT * FROM users WHERE id = ?"
              connection.query(query, [ req.session.user_id ], function(err, response) {
                req.session.username = response[0].username;
                req.session.user_email = response[0].email;

                res.json({
                  username: req.session.username,
                  user_email: req.session.user_email,
                  user_id: req.session.user_id,
                  logged_in: true
                })
              });
            });
          });
      });

    }
  });
});

app.get("/budget", function(req, res) {
  res.json("hi");
});

app.post("/formSubmit", function(req, res) {
  res.json(req.body);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(PORT, function() {
   console.log(':earth_americas: ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!', PORT, PORT);
 });

module.exports = app;

// app.post('/users', function(req, res){
 
//  var query = "INSERT into users (username, email, password_hash) values ('', 'dummy@dummies.com', '123words')";
//     connection.query(query, function(err, expenses) {
//         res.json(expenses);
//     });
// });