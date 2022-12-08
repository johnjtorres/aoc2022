'use strict';

const fs = require('fs');

function readInput(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (err) {
    console.error(err);
  }
}

const input = readInput('/home/john/Code/aoc2022/day_6/input.txt');

function findStartOfPacket(str, n) {
  for (let i = 0; i < str.length; i++) {
    const slice = str.slice(i, i + n);
    if (slice.length === new Set(slice).size) return i + n;
  }
  return -1;
}

// **** Part 1 *****
console.log('Part 1: ', findStartOfPacket(input, 4));
console.log('Part 2: ', findStartOfPacket(input, 14));

module.exports = findStartOfPacket;
