function shuffle(nums: number[], n: number): number[] {
  let finArray = [];
  for (let i = 0; i < nums.length - n; i++) {
    const numX = nums[i];
    const numY = nums[i + n];
    finArray.push(numX);
    finArray.push(numY);
  }
  return finArray;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
