function levenshteinDistance(str1, str2) {
  
	let arr = Array.from({length: str1.length + 1}).map(item =>{
		return Array.from({length: str2.length + 1})
	})
	
	for(let i = 0; i < str2.length + 1; i++){
		
		arr[0][i] = i
		
	}
	
	for(let i = 0;  i <str1.length + 1; i++){
		
		arr[i][0] = i
	
	}
		
	for(let i = 1; i < str1.length + 1; i++){
		for(let j = 1; j < str2.length + 1; j++){
			
					
			if(str1[i -1] === str2[j - 1]){
				arr[i][j] = arr[i - 1][j - 1]
			}else{
				arr[i][j] = 1 + Math.min(arr[i - 1][j], arr[i -1][j -1], arr[i][j -1])
			}	
				
			}
			
			
		}
	
	
	return arr[arr.length - 1][arr[0].length -1]
	
	
	
	
	
	
	
	
	
	
}