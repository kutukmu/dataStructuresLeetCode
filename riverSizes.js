function riverSizes(matrix) {
 
	let visited = Array.from({length: matrix.length}).map(item =>{
		return Array.from({length:matrix[0].length}).fill(false)
	});
	
	let sizes = [];
	
	
	
	
	
	for(let i = 0; i < matrix.length; i++){
		for(let j = 0; j < matrix[0].length; j++){
			
			if(visited[i][j]){
				continue;
			}
			
			
			traverse(i, j , matrix, visited, sizes)
			
		}
	}

	return sizes

}


function traverse(i, j , matrix, visited, sizes){
	
	let neigbors = [[i,j]];
	let count = 0;
	
	while(neigbors.length){
		
		let node = neigbors.pop();
		let left = node[0];
		let right = node[1]
		
		if(visited[left][right]){
			continue
		}
		visited[left][right] = true;
		if(matrix[left][right] === 0){
			continue
		}
		
		count ++;
		
		let n = getNeigboors(left, right, matrix, visited);
		
		for(let item of n){
			neigbors.push(item)
		}
		
		
	}
	
	if(count > 0){
		sizes.push(count)
	}

}


function getNeigboors(left, right, matrix, visited){
	let n = []
	
	if(left > 0 && !visited[left - 1][right]){
			n.push([left - 1 , right])
	}
	
	if(left < matrix.length - 1 && !visited[left + 1][right]){
		n.push([left + 1 , right])
	}
	
	if(right < matrix[0].length - 1 && !visited[left][right + 1]){
		n.push([left , right + 1])
	}
	
	if(right > 0 && !visited[left][right - 1]){
		n.push([left , right - 1])
	}
	
	
	return n
	
	
	
	
}