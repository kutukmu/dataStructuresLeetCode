function minNumberOfJumps(array) {
  
	let maxReach = array[0]
	let steps = array[0]
	let jump = 0
	for(let i  = 1 ; i < array.length; i++){
				
		if(i === array.length - 1 && steps > 0){
			jump ++
			return jump
		}
		
		
		
		if(array[i] + i > maxReach){
			maxReach = array[i] + i
		}
		
		steps--
		
		
		if(steps === 0){
			jump ++
			steps = maxReach - i
		}
		
	
}
	
	
	return jump 
	
	
	
	
	
}
