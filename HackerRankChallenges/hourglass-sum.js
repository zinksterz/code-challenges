//find the maximum sum in a 2D array
//Setting the maxSum to the minimum possible which in a 6x6 would be -9*7 
//
const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function hourglassSum(arr) {
  var maxSum = -63;
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      let currentSum =
        arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}

console.log(hourglassSum(arr));
