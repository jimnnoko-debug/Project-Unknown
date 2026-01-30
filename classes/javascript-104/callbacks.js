// Functions that are runned later on 


setTimeout(function () {
  console.log("Hello after 1s");
}, 1000);



// Callback function example
// fetchdata will be runned first and then callback will be runned later.
function fetchData(callback) {
  // Simulating data fetching
  let data = { name: "Sample Data" };
  callback(data);
}

function callback(data) {
  console.log("Data received:", data);
}

fetchData(callback)

