/* 
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
*/

// EXPLANATION
// We will call a function for every index
// and this fucntion expand till i - 1 and  i + 1 is same
// because if string is palindrome, its left and right value shoudl be the same,
// but id we just check the left and right we will be missign the mirror case
// so to get the mirror case we also need to check the i - 1 , i are same or not 

var longestPalindrome = function(s) {
  
    
    let longest = [0, 1];
    
    for(let i = 1; i < s.length; i++){
        
        let odd = extend(i - 1, i+1, s);
        let even = extend(i - 1, i , s);
        
        if(calcDiff(odd) > calcDiff(even)){
            if(calcDiff(odd) > calcDiff(longest)){
                longest = odd
            }
        }else{
            if(calcDiff(even) > calcDiff(longest)){
                longest = even
            }
        }
    
    }
    
    
    
    return s.slice(longest[0], longest[1])
 
}

function calcDiff(arr){
    return arr[1] - arr[0]
}


function  extend(left, right ,s){
    
    
    while(left >=0 && right < s.length ){
        
        
        if(s[left] === s[right]){
            left --;
            right ++;
        }else{
            break;
        }
    }
    
    
    return [left + 1, right]
    
    
}
 