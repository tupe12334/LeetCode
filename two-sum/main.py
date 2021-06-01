from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        enumerateNums = enumerate(nums)
        print(nums)
        for i,num in enumerateNums:
            trimArray = nums[i + 1 ::]
            for j,secondNum in enumerate(trimArray,start=i+1):
                if num+secondNum == target:
                   return [i,j]
                
s = Solution()
print(s.twoSum([2, 7, 11, 15], 9))