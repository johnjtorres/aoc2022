'use strict';

const fs = require('fs');
const ITEMS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function readInput(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (err) {
    console.error(err);
  }
}

const lines = readInput('input.txt').split('\n');

// ***** Part 1 *****
// get data, split lines
// split list in half
// find item that appears in both lists
// convert item to numeric equivalent and add to running total
const sumPriorities = lines.reduce((sum, line) => {
  const left = new Set(line.slice(0, line.length / 2));
  const right = new Set(line.slice(line.length / 2));
  let intersection = new Set([...left].filter((x) => right.has(x)));
  sum += ITEMS.indexOf([...intersection][0]) + 1;
  return sum;
}, 0);
console.log(sumPriorities);

// ***** Part 2 *****
// Split input into 3 line chunks
// Find the intersecting item in the three lines
// Output the accumulated item value
let sumGroupedPriorities = 0;
for (let i = 0; i < lines.length; i += 3) {
  const threeLines = lines.slice(i, i + 3);
  let first, second, third;
  [first, second, third] = threeLines.map((line) => new Set(line.slice()));
  const intersection = new Set(
    [...first].filter((x) => second.has(x) && third.has(x))
  );
  sumGroupedPriorities += ITEMS.indexOf([...intersection][0]) + 1;
}
console.log(sumGroupedPriorities);
