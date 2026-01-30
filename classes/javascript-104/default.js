

function multiply(a, b = 1) {
  return a * b;
}

// 5(a * b) = 5 * 1

console.log(multiply(5));  // 5 a
console.log(multiply(6))
console.log(multiply(1, 10));  // 10


function add( a = 1, b = 1, c = 1, d) {
  return (a + b + c + d);
}

console.log(add(6));  // output = 4


function sub(a = 5, b = 4) {
  return (a - b);
}

console.log(sub());  // output = 1

