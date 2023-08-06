function printAllNumbersThenAllPairSums(numbers) {
  console.log("These are the numbers: ");
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("Their sums are:");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3]);

// O(n + n^2)
