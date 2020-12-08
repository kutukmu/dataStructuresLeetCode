function fourNumberSum(array, targetSum){
											 
	let obj = {};
	let quad = [];
	
	
	for(let i = 1; i < array.length - 1; i++){
		for(let j = i + 1; j < array.length; j++){
			
				let current = array[j] + array[i];
				let diff =  targetSum - current;
			
			if(diff in obj){
				obj[diff].forEach(item =>{
					quad.push([...item, array[i], array[j]])
				})
			}
			
		}
		
		
		for(let k = 0; k < i; k++){
			
			let total = array[k] + array[i];
			
			if(total in obj){
				obj[total].push([array[k] , array[i]])
			}else{
				obj[total] = [[array[k] , array[i]]]
			}
			
		}
	
	}
	
	
	return quad
	
	
	
	
	
}