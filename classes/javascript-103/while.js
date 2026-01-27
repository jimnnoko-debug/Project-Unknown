/*
        while (condition) {
          // code to repeat
        }

*/

let condition = true;
let n = 0;

while (condition)
{
  n++;
  console.log(n);
  if (n == 5)
  {
    console.log('This will stop the loop, since the value of condition is now false');
    condition = false;
  }
}

console.log(n);


// watch out for this infinite loop
while (true) {
  console.log('This is an infinite loop watch out');
  break;
}
