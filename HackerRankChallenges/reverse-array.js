//reverse an array without using built in reverse method
const starter = [2, 5, 7];

function reverseArray(a) {
  let newA = [];
  let i = a.length - 1;

  while (i >= 0) {
    newA.push(a[i]);
    i--;
  }
  return newA;
}

console.log(reverseArray(starter));
