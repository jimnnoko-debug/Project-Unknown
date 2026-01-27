//explaining hositing
console.log(x === undefined);
var x = 3;
console.log(x);

// function scope
(
function () {
    console.log(x);
    var x = 10;
    console.log(x);
  }
) ();


// statement exmaples
let x = 5;
x++;
console.log(x);


// If statemtents rule
if (condition)
  statement

// this will fail since the next line is not a statement rather than a declaration
if (condition)
  let x = 0; 


// this will work find due to the introdcution of block statement
if (condition) {
  let x = 0;
}


return (42);

break; //ends a loop;
continue;  // skip a step


// error handling
throw new Error("Something went wrong");


// choose between execution path
if (x <- 10) {
  // do something
  // since it's a block declaration are allowed
  let y = 20;

  x = x * y;

  console.log(y);
  console.log(x);
} else {

  // do something else
  console.log('X is greater than 10');
}


// multi-branch condition exectuion path
switch (value) {
  case 1:
    break;
  default:
    break;
}


// most useful way of handling errors in javascript (capture before it happens)
try {
  risky();
} catch (e) {
  recover();
}


// function declaration
function foo() {
  // notice the block statement
}

// class Declaration ( works similar to functions)
class Bar() {}

// asynchronous programming
async function buz() {}


