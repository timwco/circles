import React from 'react';
import io from 'socket.io-client';

const socket = io();

function loadGame (cb) {
  socket.on('game', data => cb(data));
}

function getBoard (cb) {
  socket.on('board', board => cb(board));
}

function sendBoard (board) {
  socket.emit('sendBoard', board);
}

export { loadGame, getBoard, sendBoard };