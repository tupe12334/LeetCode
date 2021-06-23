from typing import List

class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        resolveArray=[]
        for num,i in enumerate(nums):
            resolveArray.append(num+(resolveArray[i-1]if resolveArray[i-1] is not None else 0))
        return resolveArray


s = Solution()
print(s.runningSum([1, 2, 3, 4]))