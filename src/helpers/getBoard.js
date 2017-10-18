import React from 'react';
import io from 'socket.io-client';

const socket = io();

function getBoard (cb) {
  socket.on('board', board => cb(board));
}

function updateBoard (board) {
  socket.emit('updateBoard', board);
}

function getUserId (cb) {
  socket.on('userId', userId => cb(userId));
}

export { getBoard, updateBoard, getUserId };