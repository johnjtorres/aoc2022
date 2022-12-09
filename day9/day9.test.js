const { isValidMove } = require('./day9');
const testInput = `\
R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

describe('Part 1', () => {
  test('isValidMove valid right', () => {
    let pos = [4, 0];
    expect(isValidMove(pos, 1, 1)).toBe(true);
  });
  test('isValidMove invalid left', () => {
    let pos = [4, 0];
    expect(isValidMove(pos, 1, -1)).toBe(false);
  });
  test('isValidMove invalid right', () => {
    let pos = [1, 5];
    expect(isValidMove(pos, 1, 1)).toBe(false);
  });
  test('isValidMove valid down', () => {
    let pos = [0, 5];
    expect(isValidMove(pos, 0, 1)).toBe(true);
  });
  test('isValidMove invalid up', () => {
    let pos = [0, 5];
    expect(isValidMove(pos, 0, -1)).toBe(false);
  });
  test('isValidMove invalid down', () => {
    let pos = [4, 0];
    expect(isValidMove(pos, 0, 1)).toBe(false);
  });
});
