// Write a fucntion that takes and array of interget and an array. And Moves the all instances of the integer
//in the array to the end of the array

// Explanation
// we will have two pointer, one of them will be at the beggining other one at the end of the array
// the one at the end will move till a value that is different than the instance integer
//we need to be careful thoug, because the right pointer can pass the left pointer so when we are moving 
// we always want to be the bigger than left value
//pointer at the beggining, will move each time and if we find a value that is equal to instance integer,
// then this is the best case to swapp this two value, so we will swap them


// SOLUTION

function moveElementToEnd(array, toMove){

        let i = 0;
        let j = array.length - 1;

        while(i < j){


            while(array[j] === toMove && i < j){
                j--
            }


            if(array[i] === toMove){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }


            i++;

        }

}
