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

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    } else {
      console.log("Happy Friendship Day!");
    }
  }
}
findNemo(everyone);
