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

const findNemo2 = (array) => {
  array.forEach((fish) => {
    if (fish === "nemo") {
      console.log("Found Nemo!");
    }
  });
};

const findNemo3 = (array) => {
  for (let fish of array) {
    if (fish === "nemo") {
      console.log("Found Nemo!");
    }
  }
};

findNemo2(everyone);
findNemo3(everyone);
