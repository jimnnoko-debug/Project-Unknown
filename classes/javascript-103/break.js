/*
 *    break;
 *
 */

const a = [1,2,3,4,5,6];

// arrays
// list of numbers
// list of strings
// list of floats
// list mix of strings and numbers

// indexing will always start at 0

//  0  1, 2, 3, 4, 5  -> this are indexes
// [1, 2, 3, 4, 5, 6]
//
// try accessing a value inside a list using the index
// a[0] === 4  false  = 1
// a[1] === 4  false  = 2
// a[2] === 4  false  = 3
// a[3] === 4  true   = 4

let theValue = 4;

for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    console.log(i);      // index
    console.log(a[i]);  // check the value at that specific index
    break;
  }
}

// while (1)
// {
//   let x = 0;   avoid initialization inside the loop
//   console.log(x);
//   if (x === 20) {
//     break;
//   }
//   x++;
// }
//


// boolean varibles
// 0 means false
// 1 means true

let x = 0;

while (running) {
  console.log(x);
  if (x === 20)
    break;
  x++;
}
