//merge sorted array
//Here I am utilizing a while loop so that Big O is linear by checking both arrays at the same time rather than in a for loop.
//Big O here is O(m + n);
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

nums1 = [1, 2, 3];
nums2 = [2, 5, 6];
// nums1 = [];
// nums2 = [1,3,5];
m = nums1.length;
n = nums2.length;
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};
merge(nums1, m, nums2, n);
console.log(nums1);
