// x &&= y

if (x) {
  x = y;
}

let isLoggedIn = true;
isLoggedIn  &&= "Welcome";


// x!!=y

if (!x) {
  x = y;
}

// if no username was provided then set Guest as the default value
let username = "";
username ||= "Guest";


// x??=y

if (x === null || x === undefined) {
  x = y;
}


let score = 0;
score ??= 10;
