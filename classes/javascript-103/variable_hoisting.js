// console.log(x === undefined);



//let x = 3; // the scope of x start here
// console.log(x);
// console.log(x === undefined);

// function scope

  function test_one() {
      console.log(x === undefined);
      console.log(x);
      var x = 10;
      console.log(x);
  }

// test_one();






































// difference between declaration and statements

let y = 0; // fully initiliazed and declared

let z;   // initialization is missing


console.log('hello');


// if (true)
//   let x = 1;

if (true)
  console.log("This will execute without a problem since it's a statement");


if ( true)
{
  const x = 0;  // for const you need to provide for both declaration and initialization

  let z = 1;        // declaration
  z = 5;
  z = 100;      // reassignment
  // x = 20;    // reassignment  is not allowed in const variables

  console.log(x)
  console.log(z)
}


let b = 0;

b++; // statement  b = b + 1;

console.log(b);

























