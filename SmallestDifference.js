//Write a fucntion that takes 2 non empty array and find the pair of numbers 
//whose absolute difference is closest to zero

// "arrayOne": [-1, 5, 10, 20, 28, 3], "arrayTwo": [26, 134, 135, 15, 17]
// asnwer [28, 26]


// Solution Explanation
// we get the  Minimum diffrerence of two numbers when we the both numbers are same
//So if we sort both array, we can easly compare numbers and decided whether we need to go forward or wait

// [-1, 3 , 5, 10 , 20 ,28]
//  ^
//[15, 17, 26, 134, 135]
// ^

// first we will compare 15 and -1 and because -1 is smaller than 15 we will increase the pointer i 
// because it is still possible that we can get a new value that is closet to 15 or even equal to 15
// so we will increase this number till we find the 15 or we are bigger then 15
// beacuse if we have a  bigger value then 15, it doesn't make sense to move forward
// because after that point we will start to open the gap of difference, so in that case wil will start to increase j
// till we get a number that equal to first number

//SOLUTION

function smallestDifference(arrayOne, arrayTwo){


    arrayOne.sort((a,b) => a - b);
    arrayTwo.sort((a,b) => a - b);

    let pair = [];
    let min = Infinity;
    let i = 0;
    let j = 0;

    while(i < arrayOne.length && j < arrayTwo.length ){
            
        let dif = Math.abs(arrayOne[i] - arrayTwo[j]);
        if(dif < min){
            min = dif;
            pair = [arrayOne[i], arrayTwo[j]]
        }


        if(arrayOne[i] < arrayTwo[j]){
            i++
        }else if(arrayOne[i] > arrayTwo[j]){
            j++
        }else{
            pair = [arrayOne[i], arrayTwo[j]];
            break;
        }

    }


    return pair





}


