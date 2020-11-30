// Write a fucntion that takes in a array and returns the longest peak in the array
// "array": [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
// longest peak = [0, 10, 6, 5, -1, -3, 2]
// left side of an array strictly increasing until they reach a tip whcih is 10 
//right side of an array strictly decreasin until 2


// Explanation
// we will iterate over an array and whenever we find a peak wil will start to open a window to left side and right side
// left pointer will go till pointer gets a bigger value then previos index
// right pointer will go till pointer gets a bigger value then previos index


