// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minMaxStack = [{ min: Infinity, max: -Infinity }];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    const prevMinMax = this.minMaxStack[this.minMaxStack.length - 1];
    const newMax = number > prevMinMax.max ? number : prevMinMax.max;
    const newMin = number < prevMinMax.min ? number : prevMinMax.min;
    this.minMaxStack.push({ min: newMin, max: newMax});
    this.stack.push(number);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
