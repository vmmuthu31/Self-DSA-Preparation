function booooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boooooo!");
  }
}

booooo([1, 2, 3, 4, 5]); // O(1)

function arrayOfHintTime(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  console.log(hiArray);
  return hiArray;
}

arrayOfHintTime(6); // O(n)
