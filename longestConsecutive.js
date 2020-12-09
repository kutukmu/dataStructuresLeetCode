var longestConsecutive = function(nums) {
    
    let map = {};
    let longest = -Infinity;
    
    for(let item of nums){
        map[item] = true;
    }
    
    
    for(let item of nums){
        
        if(item in map){
            let l = item - 1;
        let r = item + 1;
        let currentLength = 1;
        
        while(l in map){
            map[l] = false;
            currentLength ++;
            l--;
        }
        
        
        while(r in map){
            map[r] = false;
            currentLength ++;
            r++;
            
        }
            
            longest = Math.max(longest,currentLength)
        
    }
   
    }
    
    
    return longest === -Infinity ? 0: longest
 
};