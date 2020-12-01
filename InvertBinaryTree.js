var invertTree = function(root) {
    
   dfs(root);
    
    return root;

    
    
};


function dfs(node){
    
    
    if(!node){
        return 
    }
    
    
    let temp = node.left;
    node.left = node.right;
    node.right  =temp;
    
    
    dfs(node.left);
    dfs(node.right);
    
    
    
    
    
    
}
