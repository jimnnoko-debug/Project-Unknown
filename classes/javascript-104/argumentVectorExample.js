function multiply(a, b) {
// make sure this parameters exist
  if (a && b ) {
    return (a * b)
  } else {
    console.log("One argument is missing or both");
  }
}

console.log(`Zero indexed Element in the array ${process.argv[0]}`);
console.log(`First indexed Element in the array ${process.argv[1]}`);

const firstArgument = parseInt(process.argv[2]);
const secondArgument = parseInt(process.argv[3]);

console.log(multiply(firstArgument, secondArgument));

const total_length = .length

// looping 
for ( let i = 0; i < total_length; i++) {
  console.log(process.argv[i]);
}

