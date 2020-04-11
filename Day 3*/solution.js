class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(node) {
  if (node === null) return 'null';

  return `${node.val} ${serialize(node.left)} ${serialize(node.right)}`;
}

function deserialize(serialized, node = null) {
  if (!serialized.length) return node;
  
  const spaceIndex = serialized.indexOf(' ');

  let val;
  if (spaceIndex === -1) {
    val = serialized;
    serialized = '';
  } else {
    val = serialized.slice(0, spaceIndex);
    serialized = serialized.slice(spaceIndex + 1);
  }

  if (val === 'null') return node;

  node = new Node(val);
  deserialize(serialized, node.left);
  deserialize(serialized, node.right);
  return node;
}

function solution() {
  const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

  console.log(deserialize(serialize(node)).left.left.val === 'left.left');
}

solution();