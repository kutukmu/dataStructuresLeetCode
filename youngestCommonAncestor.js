// Explanation
class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }


function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo){

    let deep1 = calcDepth(descendantOne, topAncestor);
    let deep2 = calcDepth(descendantTwo, topAncestor);

    if(deep1 > deep2){
        descendantOne = equalize(descendantOne, deep1 , deep2)
    }else if(deep1 < deep2){
        descendantTwo = equalize(descendantTwo, deep2 , deep1)
    }

    if(descendantOne.name === descendantTwo.name){
        return descendantTwo
    }else{
        while(descendantOne.ancestor !== descendantTwo.ancestor){

            descendantOne = descendantOne.ancestor;
            descendantTwo =  descendantTwo.ancestor;

        }


        return descendantTwo.ancestor



    }





}


function equalize(node, big, small){
    let current = node;

    while(big !== small){
        current = current.ancestor;
        big --
    }

    return current
}