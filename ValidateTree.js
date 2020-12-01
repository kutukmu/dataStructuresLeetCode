//Write a fucntion that take in a potentially invalid BST and then return a 
//boolean representing whether the BST is valid


//Explanation
// In BST, the left node value should always be smaller then its parent node , and right value should
// always be bigger than its parent node
//So which means that node in the right side of the tree will be always bigger than root
// And left side of the tree will be always samller then root
// So Basically in the beggining, -Infinity < left < parentNode.value
// parentNode.Value < rightSide < Infinity

// Solution

function validateBst(tree) {


    return traverse(tree,-Infinity, Infinity)

  }

function traverse(node,min,max){


    if(!node){
        return true;
    }


    if(node.value >= max || node.value < min){
        return false;
    }


    return traverse(node.left,min,node.value) && traverse(node.right,node.value,max)



}