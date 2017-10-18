import React from 'react';
import io from 'socket.io-client';

const socket = io();

function getBoard (cb) {
  socket.on('board', board => cb(board));
}

function updateBoard (board) {
  socket.emit('updateBoard', board);
}

function boardUpdated (cb) {
  socket.on('boardUpdated', board => {
    cb(board);
    console.log('Board has been updated');
  });
}

export { getBoard, updateBoard, boardUpdated };