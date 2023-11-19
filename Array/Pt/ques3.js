/**
 * 
 * 118. Pascal's Triangle

 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {


    let res = []
    // console.log([0,...[2,3,3,3,3],0])

    for(let i=0;i<numRows;i++){
        let row = [];
        for(let j=0;j<=i;j++){
            if(j==0 || j==i){
                row.push(1);
            }else{
                row.push(res[i-1][j-1]+res[i-1][j])
            }
        }
        res.push(row)
    }

    return res;
};