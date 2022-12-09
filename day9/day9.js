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
