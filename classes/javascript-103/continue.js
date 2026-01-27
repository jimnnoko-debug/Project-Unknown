/*
 *
 *  continue;
 *
 */

let i = 0;


while (i < 5)
{

  i++;
  console.log(`Tracking the value of i ${i}`);

  if (i === 3) {
    continue;  // skip the code below and move on to the next iteration
    console.log("This statement will never be printed");
  }

  //console.log(n);
}
