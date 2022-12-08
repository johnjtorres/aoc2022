'use strict';

const fs = require('fs');

function readInput(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (err) {
    console.error(err);
  }
}

const input = readInput('/home/john/Code/aoc2022/day_8/input.txt');

function part1(input) {
  // Split input into 2-D array of integers
  const parsed = parseInput(input);

  // Transpose array to work with iterate over columns
  const transposed = transposeArray(parsed.slice());

  // Initialize a counter for visible trees
  // Perimeter trees are always visible, so adding these.
  let visible = (parsed[0].length + transposed[0].length) * 2 - 4;

  for (const [rowNum, row] of parsed.entries()) {
    if (rowNum === 0 || rowNum === row.length - 1) continue;
    for (let i = 1; i < row.length - 1; i++) {
      if (
        isVisibleLeft(row, i) ||
        isVisibleRight(row, i) ||
        isVisibleLeft(transposed[i], rowNum) ||
        isVisibleRight(transposed[i], rowNum)
      ) {
        visible++;
      }
    }
  }
  return visible;
}

function parseInput(input) {
  const parsed = [];
  input
    .split('\n')
    .forEach((line) =>
      parsed.push(line.split('').map((char) => parseInt(char)))
    );
  return parsed;
}

function transposeArray(arr) {
  let res = Array(arr[0].length)
    .fill()
    .map(() => []);
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      res[i][j] = arr[j][i];
    }
  }
  return res;
}

function isVisibleLeft(row, i) {
  return Math.max(...row.slice(0, i)) < row[i];
}

function isVisibleRight(row, i) {
  return Math.max(...row.slice(i + 1)) < row[i];
}

function part2(input) {
  // Split input into 2-D array of integers
  const parsed = parseInput(input);

  // Transpose array to work with iterate over columns
  const transposed = transposeArray(parsed.slice());

  let scenicScores = [];

  for (const [rowNum, row] of parsed.entries()) {
    if (rowNum === 0 || rowNum === row.length - 1) continue;
    for (let i = 1; i < row.length - 1; i++) {
      // For each cell excluding edges, calculate the scenic score.
      // Find number of trees visible top, bottom, left, and right.
      // Push the result of these numbers multiplied together to the
      //   scenicScores array.
      const left = calcLeftScore(row, i);
      const right = calcRightScore(row, i);
      const top = calcLeftScore(transposed[i], rowNum);
      const bottom = calcRightScore(transposed[i], rowNum);
      scenicScores.push(left * right * top * bottom);
    }
  }

  // Return highest scenic score.
  return Math.max(...scenicScores);
}

function calcLeftScore(row, i) {
  let score = 0;
  const left = row.slice(0, i).reverse();
  for (let j = 0; j < left.length; j++) {
    score++;
    if (left[j] >= row[i]) break;
  }
  return score;
}

function calcRightScore(row, i) {
  let score = 0;
  const right = row.slice(i + 1);
  for (let j = 0; j < right.length; j++) {
    score++;
    if (right[j] >= row[i]) break;
  }
  return score;
}

console.log('Part 1: ', part1(input));
console.log('Part 2: ', part2(input));

module.exports = {
  part1,
  isVisibleLeft,
  isVisibleRight,
  transposeArray,
  part2,
  calcLeftScore,
  calcRightScore,
};
