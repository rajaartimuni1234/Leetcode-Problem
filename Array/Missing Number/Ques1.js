
//Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n= nums.length
   let  maxNum=n *(n+1)/2;
 let  numssub=0
    for (let i=0; i<n; i++){
        numssub+= nums[i]
    }

    return maxNum-numssub
};