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

const hPos = [0, 0];
const tPos = [0, 0];
const tVisited = new Set();
addTailMove();

function move(m) {
  let [dir, mag] = parseMove(m);

  for (let i = 0; i < Math.abs(mag); i++) {
    moveKnot(hPos, dir, mag); // Move head
    if (isTailAdjacent(hPos, tPos)) continue; // If tail is adjacent, do not move tail.
    moveTail(hPos, tPos, dir, mag); // Move tail
    addTailMove();
  }
}

function parseMove(m) {
  let [dir, mag] = m.split(' ');
  return [
    ['L', 'R'].includes(dir) ? 1 : 0,
    ['L', 'U'].includes(dir) ? -mag : mag,
  ];
}

function moveKnot(knot, dir, mag) {
  mag > 0 ? knot[dir]++ : knot[dir]--;
}

function isTailAdjacent(pos1, pos2) {
  return Math.abs(pos1[0] - pos2[0]) <= 1 && Math.abs(pos1[1] - pos2[1]) <= 1;
}

function addTailMove() {
  tVisited.add(tPos.join(','));
}

function moveTail(head, tail, dir, mag) {
  if (head[0] === tail[0] || head[1] === tail[1]) {
    moveKnot(tail, dir, mag);
  } else {
    moveKnot(tail, dir, mag);
    const secDir = Math.abs(dir - 1);
    const secMag = head[secDir] > tail[secDir] ? 1 : -1;
    moveKnot(tail, secDir, secMag);
  }
}

function part1(moves) {
  moves.forEach((m) => move(m));
  return Array.from(tVisited).length;
}

console.log(part1(moves));

module.exports = {
  isTailAdjacent,
  moveTail,
  part1,
};
