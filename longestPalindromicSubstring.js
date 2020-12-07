/* 
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
*/

// EXPLANATION
// We will call a function for every index
// and this fucntion expand till i - 1 and  i + 1 is same
// because if string is palindrome, its left and right value shoudl be the same,
// but id we just check the left and right we will be missign the mirror case
// so to get the mirror case we also need to check the i - 1 , i are same or not 


