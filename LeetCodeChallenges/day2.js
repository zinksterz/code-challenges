//Filter out specific elements in an array based on a determined value
// let nums = [3,2,2,3];
// let val = 3;
let nums = [0, 2, 4, 4, 6, 5, 7, 3, 4, 2];
let val = 4;

var removeElement = function (nums, val) {
  k = nums.filter((el) => el !== val);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
};

removeElement(nums, val);
console.log(nums);
