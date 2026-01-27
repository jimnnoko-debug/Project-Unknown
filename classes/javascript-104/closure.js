


function outer(name) {
  return function () {
    return name;
  }
}


 console.log(outer("Hello"));
