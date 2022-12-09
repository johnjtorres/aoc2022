const { isTailAdjacent, moveTail, part1 } = require('./day9');
const testInput = `\
R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`.split('\n');

describe('Part 1', () => {
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
  test('moveTail diagonal 1', () => {
    let head = [1, 2];
    let tail = [3, 1];
    let expected = [2, 2];
    moveTail(head, tail, 0, -1);
    expect(tail).toEqual(expect.arrayContaining(expected));
  });
  test('moveTail up 1', () => {
    let head = [4, 2];
    let tail = [4, 4];
    let expected = [4, 3];
    moveTail(head, tail, 1, -1);
    expect(tail).toEqual(expect.arrayContaining(expected));
  });
  test('Part 1', () => {
    expect(part1(testInput)).toBe(13);
  });
});
