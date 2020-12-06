/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
*/


//Solution

var searchMatrix = function(matrix, target) {
    
    
    if(!matrix.length){
        return false
    }
    
    
    let i = 0;
    let j = matrix[0].length - 1
    
    while(i < matrix.length && j >= 0){
        
        
        if(matrix[i][j] > target){
            j--
        }else if(matrix[i][j] < target){
            i++
        }else{
            return true
        }
        
        
        
    }
    
    
    return false
 
};