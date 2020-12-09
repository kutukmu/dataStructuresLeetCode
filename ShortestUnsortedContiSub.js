/*
Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.
Return the shortest such subarray and output its length.
*/

// Explanation
//if we find the min unsrtoed element and max unsorted element
// the subarray we need to srot is actually, their correct location
// [2,6,4,8,10,9,15]
// 4 is min 
// 10 is max
// location of 4 is index = 1;
// location of 10 is index  = 5
// asnwer  5 - 1 + 1;


function subarraySort(array) {

    let min = Infinity;
    let max = -Infinity;

    for(let i = 0; i < array.length; i++){
        let num = array[i]
        if(isNotSorted(i, array)){
            min = Math.min(min, num)
            max = Math.max(max,num)
        }

    }

    if(min === Infinity){
        return [-1,-1]
    }else{
        return max - min + 1
    }

}

function isNotSorted(idx, nums){

    if(idx === nums.length - 1){
        if(nums[idx - 1] > nums[idx]){
            return false;
        }
    }


    return nums[idx] > nums [idx + 1] || nums[idx] < nums[idx - 1]

}













