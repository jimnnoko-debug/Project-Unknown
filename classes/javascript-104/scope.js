test();

function test() {
  let x = 10;
  console.log(x)
}

// x will never be visible outside the function.



const hello = function (name) {
  return "Hello " + name;
}

console.log(hello("John"));