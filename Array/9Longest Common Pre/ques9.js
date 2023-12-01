/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let res=""
    //traverse first string chars
    for (let i=0; i<strs[0].length; i++){
        //traverse array 
     let ch=strs[0][i]
        let istrue=true;
    
        for (let j=1; j<strs.length; j++){
         if (ch!==strs[j][i]){
             istrue=false
             break;
         }
        }
        if (istrue===false){
            break;
        }
        else
      {  res+=ch;}
    } 
    
    return res;
    };