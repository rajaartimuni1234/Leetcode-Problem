class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n= nums.size();
        int totalNum= n*(n+1)/2;
        int NumsNumber=0;
        for (int i=0; i<n; i++ ){
         NumsNumber+=nums[i];
        }

        return totalNum-NumsNumber;
    }
};