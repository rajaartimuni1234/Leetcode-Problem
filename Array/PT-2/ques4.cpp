
class Solution {
public:
    vector<int> getRow(int rowIndex) {
       vector<int>  res(1,1);

    int temp=1;
    for (int k=1; k<=rowIndex; k++){
         
         temp= temp* (rowIndex-k+1)/k;
         res.push_back(temp);
         
    }

return res;
        
    }
};