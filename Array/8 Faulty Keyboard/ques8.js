/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let res="";
    
    for (let i=0; i< s.length; i++){
        if (s[i]==='i'){
            res=res.split("").reverse().join("")
        }
        else {
            res+=s[i]
        }
    }
    
    return res
    };