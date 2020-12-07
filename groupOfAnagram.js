function groupAnagrams(words) {
	
    let map = new Map();
        
    words.forEach(item =>{
        let word = item.split("").sort().join("");
        if(map.get(word)){
            map.get(word).push(item)
        }else{
            map.set(word, []);
            map.get(word).push(item)
        }
    })
        
        
        return [...map.values()]
        
        
        
        
        
        
        
        
        
    }
    