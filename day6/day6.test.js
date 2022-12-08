const findStartOfPacket = require('./solution');

test('Start of packet 1', () => {
  expect(findStartOfPacket('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 4)).toBe(7);
});
test('Start of packet 2', () => {
  expect(findStartOfPacket('nppdvjthqldpwncqszvftbrmjlhg', 4)).toBe(6);
});
test('Start of packet 3', () => {
  expect(findStartOfPacket('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 4)).toBe(10);
});
test('Start of packet 4', () => {
  expect(findStartOfPacket('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 4)).toBe(11);
});
test('Start of packet 5', () => {
  expect(findStartOfPacket('bvwbjplbgvbhsrlpgdmjqwftvncz', 4)).toBe(5);
});
test('Start of message 1', () => {
  expect(findStartOfPacket('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14)).toBe(19);
});
test('Start of message 2', () => {
  expect(findStartOfPacket('nppdvjthqldpwncqszvftbrmjlhg', 14)).toBe(23);
});
test('Start of message 3', () => {
  expect(findStartOfPacket('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14)).toBe(29);
});
test('Start of message 4', () => {
  expect(findStartOfPacket('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14)).toBe(26);
});
test('Start of message 5', () => {
  expect(findStartOfPacket('bvwbjplbgvbhsrlpgdmjqwftvncz', 14)).toBe(23);
});
