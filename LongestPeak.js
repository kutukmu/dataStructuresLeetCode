// Write a fucntion that takes in a array and returns the longest peak in the array
// "array": [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
// longest peak = [0, 10, 6, 5, -1, -3, 2]
// left side of an array strictly increasing until they reach a tip whcih is 10 
//right side of an array strictly decreasin until 2


// Explanation
// we will iterate over an array and whenever we find a peak wil will start to open a window to left side and right side
// left pointer will go till pointer gets a bigger value then previos index
// right pointer will go till pointer gets a bigger value then previos index

//  Solution

function longestPeak(array) {

    let longest = 0;


    for(let i = 1; i < array.length ; i++){

        if(array[i] > array[i - 1] && array[i] > array[i +  1]){

            let left  = calcLeft(i - 1, array);
            let right = calcRight( i +  1, array);

            longest = Math.max(longest , right - left + 1)

        }

    }
    return longest;
}

function calcLeft(idx, array){

    while(idx >= 0){

        if(array[idx] > array[idx - 1]){
            idx --;
        }else{
            break;
        }

    }

    return idx;

}

function calcRight(idx, array){

    while(idx < array.length){

        if(array[idx] > array[idx + 1]){
            idx ++;
        }else{
            break;
        }

    }

    return idx

}




