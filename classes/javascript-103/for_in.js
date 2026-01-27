/*
        for (let key in object) {
          // code
        }
 */

const car = { make: "Ford", model: "Mustang"};

for (let key in car) {
  console.log(key, car[key]);
}
