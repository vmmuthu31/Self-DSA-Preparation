const nemo = ["nemo"];
const everyone = [
  "Rohit",
  "karthik",
  "ravi",
  "Ganesh",
  "rajan",
  "nemo",
  "abhishek",
  "Deepak",
  "vishal",
  "chandru",
  "kamesh",
  "nemo",
];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
      break; // we used brake if we find our nemo
    }
  }
}
findNemo(everyone);
