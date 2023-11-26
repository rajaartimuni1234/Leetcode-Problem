/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

    let store=[]
   
    for (let i=0; i<= rowIndex; i++){
        let row=[]
        for (let j=0; j<=i;j++){
            if (j==0 || j==i){
                row.push(1)
            }
            else {
                row.push(store[i-1][j-1]+ store[i-1][j])
            }
        }
    
            store.push(row)
           if (i===rowIndex){
               return row
           }          
    }
};