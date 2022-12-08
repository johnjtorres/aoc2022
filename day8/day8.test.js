const {
  part1,
  isVisibleLeft,
  isVisibleRight,
  transposeArray,
  part2,
  calcLeftScore,
  calcRightScore,
} = require('./solution');

const testInput = `\
30373
25512
65332
33549
35390`;

describe('isVisibleLeft', () => {
  const data = [0, 2, 2, 4, 4, 7, 1, 9];
  test('test 1', () => {
    expect(isVisibleLeft(data, 1)).toBe(true);
  });
  test('test 2', () => {
    expect(isVisibleLeft(data, 2)).toBe(false);
  });
  test('test 3', () => {
    expect(isVisibleLeft(data, 3)).toBe(true);
  });
  test('test 4', () => {
    expect(isVisibleLeft(data, 4)).toBe(false);
  });
  test('test 5', () => {
    expect(isVisibleLeft(data, 5)).toBe(true);
  });
  test('test 6', () => {
    expect(isVisibleLeft(data, 6)).toBe(false);
  });
});

describe('isVisibleRight', () => {
  const data = [9, 7, 6, 8, 4, 3, 2, 0];
  test('test 1', () => {
    expect(isVisibleRight(data, 1)).toBe(false);
  });
  test('test 2', () => {
    expect(isVisibleRight(data, 2)).toBe(false);
  });
  test('test 3', () => {
    expect(isVisibleRight(data, 3)).toBe(true);
  });
  test('test 4', () => {
    expect(isVisibleRight(data, 4)).toBe(true);
  });
  test('test 5', () => {
    expect(isVisibleRight(data, 5)).toBe(true);
  });
  test('test 6', () => {
    expect(isVisibleRight(data, 6)).toBe(true);
  });
});

test('transposeArray', () => {
  const test = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const expected = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];
  expect(transposeArray(test)).toStrictEqual(expected);
});

describe('calcLeftScore', () => {
  const data = [1, 2, 5, 4, 5, 5];
  test('Test 1', () => {
    expect(calcLeftScore(data, 1)).toBe(1);
  });
  test('Test 2', () => {
    expect(calcLeftScore(data, 2)).toBe(2);
  });
  test('Test 3', () => {
    expect(calcLeftScore(data, 3)).toBe(1);
  });
  test('Test 4', () => {
    expect(calcLeftScore(data, 4)).toBe(2);
  });
});

describe('calcRightScore', () => {
  const data = [1, 2, 5, 4, 5, 5];
  test('Test 1', () => {
    expect(calcRightScore(data, 1)).toBe(1);
  });
  test('Test 2', () => {
    expect(calcRightScore(data, 2)).toBe(2);
  });
  test('Test 3', () => {
    expect(calcRightScore(data, 3)).toBe(1);
  });
  test('Test 4', () => {
    expect(calcRightScore(data, 4)).toBe(1);
  });
});

test('Part 1', () => {
  expect(part1(testInput)).toBe(21);
});

test('Part 2', () => {
  expect(part2(testInput)).toBe(8);
});
