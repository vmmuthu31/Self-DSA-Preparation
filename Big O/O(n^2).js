// log all pairs of array

const boxes = ["a", "b", "c", "d", "e"];

function logAllPairofArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairofArray(boxes);

// totally O(n*n) = O(n^2);
