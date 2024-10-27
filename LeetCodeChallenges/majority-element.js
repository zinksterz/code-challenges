var majorityElement = function (nums) {
  const elementDict = {};
  for (const num of nums) {
    elementDict[num] = (elementDict[num] || 0) + 1;
  }

  let mostFrequent = null;
  let maxCount = 0;

  for (const num in elementDict) {
    if (elementDict[num] > maxCount) {
      maxCount = elementDict[num];
      mostFrequent = num;
    }
  }
  console.log(mostFrequent);
  return mostFrequent;
};


let nums = [1,2,2,3,4,5];

console.log(majorityElement(nums));