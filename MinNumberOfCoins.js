/*You are given coins of different denominations and a total
 amount of money amount. Write a function to compute the fewest
number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, 
return -1.

You may assume that you have an infinite number of each kind of coin.*/

var coinChange = function(coins, amount) {
    
   
    let arr = Array.from({length: amount + 1}).fill(Infinity);
    
    arr[0] = 0;
    
    
    for(let i = 0; i < coins.length; i++){
        
        let denom  = coins[i];;
        
        for(let j = 0; j < arr.length; j++){
            
            
            if(j >= denom){
                
              arr[j] = Math.min(arr[j], 1 + arr[j- denom])  
                
                
            }
            
            
            
            
            
        }
    }
    
    
    
    return arr[amount] === Infinity ? -1: arr[amount]

};