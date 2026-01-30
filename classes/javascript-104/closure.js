


function outer(name) {
  return function () {
    console.log(`Hello ${name}`);
  }
}

outer("Alex")();
