'use strict';

const fs = require('fs');

function readInput(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (err) {
    console.error(err);
  }
}

// ***** Part 1 *****
// const lines = readInput('input.txt').split('\r\n');
const lines = readInput('day_5_input.txt').split('\n');

// Parse stacks
const crateLines = lines
  .filter((line) => line.startsWith('['))
  .map((line) => {
    const crates = [];
    for (let i = 0; i < line.length; i += 4) crates.push(line[i + 1]);
    return crates;
  });
// console.log(crateLines);
const stacks = crateLines[0]
  .map((_, i) => crateLines.map((x) => x[i]))
  .map((x) => x.reverse())
  .map((stack) => stack.filter((x) => x !== ' '));
// console.log(stacks);

// Parse moves
const moves = lines
  .filter((line) => line.startsWith('move'))
  .map((y) =>
    y
      .replace(/[a-z]/g, '')
      .trim()
      .split(' ')
      .filter((x) => x)
  );

function move(num, from, to) {
  // for (let i = 0; i < num; i++) {
  //   stacks[to - 1].push(stacks[from - 1].pop()); //                       Part 1
  // }
  const buffer = [];
  for (let i = 0; i < num; i++) {
    buffer.unshift(stacks[from - 1].pop()); //                            Part 2
  }
  stacks[to - 1].push(...buffer);
}
moves.forEach((m) => move(...m));
console.log(stacks.map((stack) => stack.at(-1)).join(''));
// Parse move lines
