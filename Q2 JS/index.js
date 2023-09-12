
const getMissingNumber = (nums) => {
    let n = nums.length;
    let sum = (n * (n + 1)) / 2;
    console.log(sum)
    let arraySum = nums.reduce((acc, cur) => acc + cur, 0);
    // return sum - arraySum;
    return `The Missing number in array [${nums}] is ==> ${sum - arraySum}`
  }
  
  const nums1 =  [3,0,1];
  const nums2 =   [9,6,4,2,3,5,7,0,1];
  const nums3 =  [0,1];
  
  console.log('Example #1 : ', getMissingNumber(nums1));
  console.log('Example #2 : ', getMissingNumber(nums2));
  console.log('Example #3 : ', getMissingNumber(nums3));
  