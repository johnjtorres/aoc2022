'use strict';

const fs = require('fs');

function readInput(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (err) {
    console.error(err);
  }
}

const moves = readInput('/home/john/Repos/aoc2022/day9/input.txt').split('\n');

const hPos = [4, 0];
const tPos = [4, 0];
const tVisited = new Set();
tVisited.add(tPos.join(''));

function move(m) {
  let [dir, mag] = parseMove(m);

  for (let i = 0; i < Math.abs(mag); i++) {
    // Return if move is invalid
    if (!isValidMove(hPos, dir, mag)) return;

    // Move head
    mag > 0 ? hPos[dir]++ : hPos[dir]--;

    // If tail is adjacent, do not move tail.
    if (isTailAdjacent()) continue;

    // Move tail

    addTailMove();
  }
}

function parseMove(m) {
  let [dir, mag] = m.split(' ');
  return [
    ['L', 'R'].includes(dir) ? 1 : 0,
    ['L', 'U'].includes(mag) ? -mag : mag,
  ];
}

function isValidMove(pos, dir, mag) {
  const max = dir === 1 ? 6 : 5; // Bridge is 6 wide and 5 tall
  console.log(pos);
  const newPos = pos[dir] + mag / Math.abs(mag);
  return newPos >= 0 && newPos < max;
}

function isTailAdjacent(pos1, pos2) {
  return Math.abs(pos1[0] - pos2[0]) <= 1 && Math.abs(pos1[1] - pos2[1]) <= 1;
}

function addTailMove() {
  tVisited.add(tPos.join(''));
}

function moveTail() {
  // Diagonal
  if (hPos[0] !== tPos[0] && hPos[1] !== tPos[1]) {
  }

  // Horizontal
  // Vertical
}

function part1(moves) {
  moves.forEach((m) => move(m));
  return Array.from(tVisited).length;
}

// move(moves[0]);

module.exports = {
  isValidMove,
  isTailAdjacent,
};
