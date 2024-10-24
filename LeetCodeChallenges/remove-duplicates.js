//Code challenge called for removing duplicates from sorted array and returning count of modified array
//Function removes duplicates while clearing empty space
//Set two pointers | if pointers values are equal we remove the higher index | array will be decremented by one | else increment pointers

var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      nums.splice(j, 1);
    } else {
      i++;
      j++;
    }
  }

  return k = nums.length;
};

let nums = [-1, 0, 0, 0, 2, 3, 3, 4, 5, 5];

console.log(removeDuplicates(nums));