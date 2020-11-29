// The function should find the all triplest in the array that sum up tp the target sum
//and return two dimensional array of all triplets. The numbers in the each triblet should ne in ascending order
//and triblets also should be ordered in ascending order
// {"array": [12, 3, 1, 2, -6, 5, -8, 6], "targetSum": 0}
// answer =  [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

//Solution Explanation
//This problem is very similar to two Number sum question where we first sort the input array and then
//Put two pointer to beginning and  end of the array. Then we compare the total of that two pointer with our target value
//Because array is sorted it means that if my total value is bigger then my target, we need to decrease the index of pointer at the end
// otherwise if total is lower then target we need to increase the first poitner
// if the total is equal to the target then we found our pair so we can push it to the array

// so this explanation was for two Sum problem. But this problem is ThreeSum Problem, So there should be some difference?
// Yes you're right, there is a so little difference which is we will keep one static pointer for each index
//and then we will put one pointer two index after that static poitner and then for the last index of array
//I will explain it clearly by using array
// if I have [12, 3, 1, 2, -6, 5, -8, 6] this array,  first we will sort it
// Sorted version [-8,- 6, 1, 2, 3, 5, 6, 12]

// [-8,- 6, 1, 2, 3, 5, 6, 12]
//  |    |                  |
//statc  i                  j

// So for each index of an array we will calculate a target value = targetSum - array[statc]
//After this target value,  we will have an total value which is the total of pointer i and j;
// rest of the problem is same as two poitner problem anymore
// we just need to move the pointer according to difference between or total and target value