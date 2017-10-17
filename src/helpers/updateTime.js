import React from 'react';
import io from 'socket.io-client';

const socket = io();

function updateTime (cb) {
  socket.on('time', timeString => cb(timeString));
  // Should test an EMIT here
}

export { updateTime };