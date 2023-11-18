/**
 * 2760. Longest Even Odd Subarray With Threshold
 * 
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    
    let res=0;
      let n=0;
      let is_starting = false;
      for (let i=0; i<nums.length; i++){
          if(nums[i]%2==0 && !is_starting && nums[i]<= threshold){
              is_starting=true;
              n++;
          } else if(is_starting && nums[i]<= threshold && nums[i-1]%2 != nums[i]%2){
              n++;
          }else{
              if(is_starting) i--;
              is_starting=false;
              n=0;
          }
          if(n>res){
              res=n;
          }
      }
      return res;
  };