function largestSumContiguousSubarray(arr) {
    // Initialize variables to store the maximum sum found so far and the current sum
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];

    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Update the current sum, choosing the maximum between the current element and the current sum plus the current element
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        // Update the maximum sum found so far if the current sum is greater
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return [maxSoFar, maxEndingHere];
}

// Example usage
const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log("Largest sum contiguous subarray:", largestSumContiguousSubarray(arr)); // Output: 7
