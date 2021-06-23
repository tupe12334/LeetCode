function runningSum(nums: number[]): number[] {
  const resolveArray: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    resolveArray.push(num + (resolveArray[i - 1] || 0));
  }
  return resolveArray;
}

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
