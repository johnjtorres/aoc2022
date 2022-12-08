/*
In case the Elves get hungry and need extra snacks, they need to know which Elf 
to ask: they'd like to know how many Calories are being carried by the Elf 
carrying the most Calories. In the example above, this is 24000 
(carried by the fourth Elf).

Find the Elf carrying the most Calories. How many total Calories is that Elf 
carrying?
*/

'use strict';

const fs = require('fs');
function readInput(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (err) {
    console.error(err);
  }
}

// Read input file
const lines = readInput('input.txt').split('\n');

/*
***** Part 1 *****
Find elf with most calories.
Each elf is separated by a blank line.
Append the sum of the calories for each elf to an array of elves.
*/
const elves = [];
let elf = [];
for (const line of lines) {
  if (line) {
    elf.push(parseInt(line));
    continue;
  }
  elves.push(elf.reduce((a, b) => a + b));
  elf = [];
}
console.log(Math.max(...elves));

/*
***** Part 2 *****
Find the three elves with the most calories.
Sort the array.
Take the first three values and sum them.
*/
const topThreeElves = elves.sort((a, b) => b - a).slice(0, 3);
console.log(topThreeElves.reduce((a, b) => a + b));
