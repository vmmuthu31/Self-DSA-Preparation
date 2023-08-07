// Given 2 array, create a function that let's a user know (true/false) whether these two arrays contain any common items
// for Example:
// const array1 = ['a','b','c','x'];
// const array2 = ['z', 'y', 'i'];
// should return false
// ---------
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','x'];
// should return true

// 2 parameter - array inputs -- no size limit
// return true/false

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "j"];

function containCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
containCommonItem(array1, array2);
