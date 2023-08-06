const nemo = ["nemo"];
const everyone = [
  "nemo",
  "karthik",
  "ravi",
  "Ganesh",
  "rajan",
  "mahesh",
  "abhishek",
  "Deepak",
  "vishal",
  "chandru",
  "kamesh",
  "nemo",
];

const large = new Array(10051).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("founded Nemo");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}
