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

  for (let i = 0; i < mag; i++) {
    // Check if valid move, return if not.
    if (!isValidMove(dir, mag)) return;

    // Move head
    hPos[dir] += mag;

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

function isValidMove(dir, mag) {
  const max = dir === 1 ? 5 : 4;
  return 0 <= hPos[dir] + mag <= max;
}

function isTailAdjacent() {
  return Math.abs(tPos[0] - hPos[0]) <= 1 && Math.abs(tPos[1] - hPos[1]) <= 1;
}

function addTailMove() {
  tVisited.add(tPos.join(''));
}

function part1(moves) {
  moves.forEach((m) => move(m));
  return Array.from(tVisited).length;
}

move(moves[0]);
