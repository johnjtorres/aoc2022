const { part1, FileTreeNode } = require('./solution');

describe('FileTreeNode', () => {
  test('getTotalSize', () => {
    const root = new FileTreeNode('/');
    const dirA = new FileTreeNode('a');
    const btxt = new FileTreeNode('b.txt', 14848514);
    const cdat = new FileTreeNode('c.dat', 8504156);
    const dirD = new FileTreeNode('d');
    const etxt = new FileTreeNode('e.txt', 500);
    dirD.children.push(etxt);
    root.children.push(dirA, btxt, cdat, dirD);
    expect(root.totalSize).toBe(14848514 + 8504156 + 500);
  });
});

const testCommands = `\
$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

test.skip('Test data part 1', () => {
  expect(part1(testCommands)).toBe(95437);
});
