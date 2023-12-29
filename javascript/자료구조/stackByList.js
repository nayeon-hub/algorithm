class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());

const stackArr = [];

stackArr.push(1);
stackArr.push(2);
stackArr.push(3);
console.log(stackArr);

stackArr.pop();
console.log(stackArr);

console.log(stackArr.length - 1);

function solution(s) {
  let answer = true;
  let closeStack = [];
  s = s.replace(/\(\)/g, "");

  for (let str of s) {
    if (closeStack[closeStack.length - 1] === ")" && str === "(") {
      closeStack.pop();
    } else if (str === "(") {
      closeStack.push(str);
    }
  }

  return closeStack.length ? false : true;
}
