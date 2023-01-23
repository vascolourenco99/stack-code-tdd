export class Stack {
  constructor() {
    this.first = null;
    this.number = 0;
  }

  push(item) {
    const lastFirst = this.first;
    this.first = {
      item: item,
      next: lastFirst,
    };
    this.number++;
  }

  pop() {
    if (this.empty()) {
      throw Error("Can not pop from empty stack");
    }
    const item = this.first.item;
    this.first = this.first.next;
    this.number--;
    return item;
  }

  peek() {
    if (this.empty()) {
      throw Error("Can not peek from empty stack");
    }
    const item = this.first.item;
    return item;
  }

  size() {
    return this.number;
  }

  empty() {
    if (this.size === 0) {
      return this.size;
    }
  }
}
