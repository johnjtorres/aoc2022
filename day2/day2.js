'use strict';

const fs = require('fs');

const LOSE = 0;
const WIN = 6;
const TIE = 3;

const shapePoints = {
  A: 1, // Rock
  B: 2, // Paper
  C: 3, // Scissors
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
};

function readInput(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (err) {
    console.error(err);
  }
}

function getOutcome(shape1, shape2) {
  switch (shape1 + shape2) {
    case 'AY':
    case 'BZ':
    case 'CX':
    case 'AB':
    case 'BC':
    case 'CA':
      return WIN;
    case 'AZ':
    case 'BX':
    case 'CY':
    case 'AC':
    case 'BA':
    case 'CB':
      return LOSE;
    default:
      return TIE;
  }
}

function parseLine(line) {
  let shape1, shape2;
  [shape1, shape2] = line.split(' ');
  return [shape1, shape2];
}

const input = readInput('input.txt')
  .split('\n')
  .filter((val) => val);

/*
 ***** Part 1 *****
 */

function getRoundScore(shape1, shape2) {
  const outcome = getOutcome(shape1, shape2);
  const shapePoint = shapePoints[shape2];
  return outcome + shapePoint;
}

function playRound(line) {
  return getRoundScore(...parseLine(line));
}

const totalScore = input.reduce((sum, a) => sum + playRound(a), 0);
console.log(totalScore);

/*
 ***** Part 2 *****
 X -> lose
 Y -> draw
 Z -> win
 */

function getDecryptedRoundScore(shape1, shape2) {
  const decryptedShape = decryptShape(shape1, shape2);
  return getRoundScore(shape1, decryptedShape);
}

function playDecryptedRound(line) {
  return getDecryptedRoundScore(...parseLine(line));
}

function decryptShape(shape1, shape2) {
  switch (shape1 + shape2) {
    case 'CZ':
    case 'AY':
    case 'BX':
      return 'A';
    case 'AZ':
    case 'BY':
    case 'CX':
      return 'B';
    default:
      return 'C';
  }
}

const totalDecryptedScore = input.reduce(
  (sum, a) => sum + playDecryptedRound(a),
  0
);
console.log(totalDecryptedScore);
