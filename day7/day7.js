'use strict';

const fs = require('fs');

function readInput(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (err) {
    console.error(err);
  }
}

const lines = readInput('/home/john/Code/aoc2022/day_7/input.txt').split('\n');

class FileTreeNode {
  constructor(node, parent = null, size = null) {
    this.node = node;
    this.parent = parent;
    this.children = [];
    this.size = size;
  }

  get totalSize() {
    if (!this.children) return this.size;
    return (
      this.size + this.children.reduce((sum, val) => sum + val.totalSize, 0)
    );
  }

  find(node) {
    for (const child of this.children) {
      if (child.node === node) return child;
    }
    return null;
  }
}

const root = new FileTreeNode('/');
const dirs = [];
const TOTAL_SIZE = 70000000;
const MIN_FREE_SPACE = 30000000;

function part1(input) {
  let curNode = root;

  for (const line of input.slice(1)) {
    if (line === '$ cd ..') {
      curNode = curNode.parent;
    } else if (line.startsWith('$ cd')) {
      curNode = curNode.find(line.split(' ').at(-1));
    } else if (line === '$ ls') {
      continue;
    } else if (line.startsWith('dir')) {
      const name = line.split(' ').at(-1);
      const dir = new FileTreeNode(name, curNode);
      curNode.children.push(dir);
      dirs.push(dir);
    } else if (line.match(/^[0-9]/)) {
      const [size, name] = line.split(' ');
      curNode.children.push(new FileTreeNode(name, curNode, parseInt(size)));
    } else {
      console.log(`Could not match on "${line}"`);
    }
  }

  return dirs
    .filter((dir) => dir.totalSize <= 100000)
    .reduce((sum, dir) => sum + dir.totalSize, 0);
}

console.log('Part 1: ', part1(lines));

function part2() {
  const rootSize = root.totalSize;
  const unusedSpace = TOTAL_SIZE - rootSize;
  console.log(rootSize);
  const sorted = dirs.slice().sort((a, b) => a.totalSize - b.totalSize);
  for (const dir of sorted) {
    if (unusedSpace + dir.totalSize >= MIN_FREE_SPACE) {
      console.log('Part 2:');
      console.log(dir.totalSize);
      return;
    }
  }
}

part2();

module.exports = {
  part1,
  FileTreeNode,
};
