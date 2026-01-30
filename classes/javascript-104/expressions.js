// all functions are declaration
// you can do assignment to it later on


console.log(Square(9));
console.log(Square(2));

function Square(n) {
  return n * n;
};

// this function is not going to be hoisted
const square = (n) => { return n * n }

console.log(square(12));
