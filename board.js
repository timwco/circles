let id = Math.floor(Math.random() * 20);
let board = { id: id, display: []}, circle, i;

for (i = 1; i < 401; i++){
  circle = { id: i, user: ''}
  board.display.push(circle);
}

module.exports = board;