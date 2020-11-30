// Write a fucntion that take in an array of integers and return whether the array is monotonic



//Solution Explanation
//We will have a two varile that will keep whether array is increasing or decresing
// and because montonic array can nto be increasing and decreasing both together 
// if they are true at eh same time we will return false, otherwise return true


var isMonotonic = function(A) {
 
    let isInc = false;
    let isDec = false;
    
    for(let i = 1; i < A.length; i++){
        
        if(A[i] - A[i - 1] > 0){
            isInc  = true;
        }else if(A[i] - A[i - 1] < 0){
            isDec = true;
        }
      
        
    }
    
    
    if(isInc && isDec){
        return false;
    }else {
        return true;
    }
    
    
    
    
};
