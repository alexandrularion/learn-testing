class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    delete this.items[this.top];
    this.top -= 1;
  }

  get(index) {
    return this.items[index] ?? null;
  }
}

// module.exports = Stack;
