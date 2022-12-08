'use strict';

const fs = require('fs');

function readInput(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (err) {
    console.error(err);
  }
}

const lines = readInput('input.txt').split('\n');

// ***** Part 1 *****
// Create a function to filter lines with one range that contains the other
// Output length of array
function isFullyContained(line) {
  const split = line.split(/[-,]/).map((x) => parseInt(x));
  return (
    (split[0] >= split[2] && split[1] <= split[3]) ||
    (split[2] >= split[0] && split[3] <= split[1])
  );
}

const totalFullyContained = lines.filter(isFullyContained);
console.log(totalFullyContained.length);

// ***** Part 2 *****
// Create function to find if ranges overlap
// Creating arrays of all integers in the array and finding if there are any
//   similar items.
function range(begin, end) {
  let range = [];
  for (let i = begin; i <= end; i++) {
    range.push(i);
  }
  return range;
}

function isPartiallyContained(line) {
  const split = line.split(/[-,]/).map((x) => parseInt(x));
  const firstRange = range(split[0], split[1]);
  const secondRange = range(split[2], split[3]);
  const combined = [...firstRange, ...secondRange];
  return combined.length !== [...new Set(combined)].length;
}

const partiallyContained = lines.filter(isPartiallyContained);
console.log(partiallyContained.length);
