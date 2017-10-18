const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
// const pgp = require('pg-promise')()

// Set up App
const app = express();
const server = require('http').Server(app);
const io = socketio(server);

// Configure View Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Basic App Settings
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Generate Board
let newBoard = require('./board');
let currentBoard;

// Any Route
app.get('*', (req, res) => res.render('index'));

// Set Up Socket Connection
io.on('connection', (socket) => {
  console.log('>------------- SOCKET ID', socket.id);
  currentBoard = (currentBoard !== undefined) ? currentBoard : newBoard;
  console.log('>------ Client connected, BOARD ID:', currentBoard.id);
  io.emit('game', { board: currentBoard, gameId: socket.id });
  socket.on('updateBoard', board => {
    console.log('=======================================')
    console.log(board)
    console.log('=======================================')
    io.emit('board', board);
    currentBoard = board;
  })
  socket.on('disconnect', () => console.log('Client disconnected'));
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

server.listen(process.env.PORT || '3000');

module.exports = app;
