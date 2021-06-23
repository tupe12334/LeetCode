from typing import List

class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        finArray=[]
        for i in range((len(nums))-n):
            finArray.append(nums[i])
            finArray.append(nums[i+n])
            
        return finArray


s = Solution()
print(s.shuffle([2,5,1,3,4,7],3))