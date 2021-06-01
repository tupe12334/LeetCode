function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const secondNum = nums[j];
      if (num + secondNum === target) {
        return [i, j];
      }
    }
  }
  return [0, 0];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 3], 6));
