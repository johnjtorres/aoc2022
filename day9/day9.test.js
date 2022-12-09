const { isValidMove, isTailAdjacent } = require('./day9');
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
  test('isTailAdjacent on top', () => {
    let pos1 = [4, 0];
    let pos2 = [4, 0];
    expect(isTailAdjacent(pos1, pos2)).toBe(true);
  });
  test('isTailAdjacent adjacent horizontal', () => {
    let pos1 = [4, 1];
    let pos2 = [4, 0];
    expect(isTailAdjacent(pos1, pos2)).toBe(true);
  });
  test('isTailAdjacent adjacent vertical', () => {
    let pos1 = [4, 0];
    let pos2 = [3, 0];
    expect(isTailAdjacent(pos1, pos2)).toBe(true);
  });
  test('isTailAdjacent not adjacent horizontal', () => {
    let pos1 = [4, 2];
    let pos2 = [4, 0];
    expect(isTailAdjacent(pos1, pos2)).toBe(false);
  });
  test('isTailAdjacent not adjacent vertical', () => {
    let pos1 = [2, 0];
    let pos2 = [4, 0];
    expect(isTailAdjacent(pos1, pos2)).toBe(false);
  });
  test('isTailAdjacent adjacent diagonal 1', () => {
    let pos1 = [3, 1];
    let pos2 = [4, 0];
    expect(isTailAdjacent(pos1, pos2)).toBe(true);
  });
  test('isTailAdjacent adjacent diagonal 2', () => {
    let pos1 = [3, 1];
    let pos2 = [2, 2];
    expect(isTailAdjacent(pos1, pos2)).toBe(true);
  });
});
