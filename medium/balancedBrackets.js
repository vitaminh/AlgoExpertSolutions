function balancedBrackets(string) {
  const opening = '([{';
  const closing = ')]}';
  const stack = [];
  const match = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  // cannot use Array.prototype.forEach as the only way to terminate .forEach is by throwing an exception
  for (const char of string) {
    if (opening.includes(char)) {
      stack.push(char);
    } else if (closing.includes(char)) {
      if (stack.length === 0) {
        return false;
      }

      if (stack[stack.length - 1] === match[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
