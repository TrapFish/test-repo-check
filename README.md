# test-repo-check

//Flat array with the change in the K-1 value from the array 

// function flatArrayFromMatrix(mat){
//     let flatArray = mat.reduce((acc, val)=>{
//         if(Array.isArray(val)){
//             return acc.concat(...val)
//         } else {
//             return acc.concat(val)
//         }
//     } , []);
//     return flatArray;
// }

// function kthSmallest(mat, k){
//     let flatArrayRecieved = flatArrayFromMatrix(mat);
//     let sortedFlatArray = flatArrayRecieved.sort((a,b)=> a-b);
//     return sortedFlatArray[k-1]
// }


// const matrix = [
//     [10, 20, 30],
//     [15, 25, 35],
//     [5,  50, 60]
//   ];
  
//   const k = 4; 
//   const result = kthSmallest(matrix, k);
//   console.log(`The ${k}th smallest element is: ${result}`);




//Find the missing number 
// function createNArray(a){
//   let nNaturalArray = [];
//   for(let i =0 ; i <= a ; i++){
//     nNaturalArray.push(i);
//   }
//   return nNaturalArray;
// }

// function sumOfElement(arr){
//     let summation = arr.reduce((acc, val)=>{
//        return acc += val;
//     }, 0);
//     return summation;
// }

// function findMissingNumber(a){
//    let nNaturalArray = createNArray(a.length + 1);
//    let sumNaturalNumber = sumOfElement(nNaturalArray);
//    let sumProvidedArray = sumOfElement(a);
//    return sumNaturalNumber - sumProvidedArray;
// }

// let arr = [1, 2, 4, 5, 6];
// const result = findMissingNumber(arr);



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
==============================================================================================


    <div>
        <div id="body" style="min-height: 50vh">
            <p>This is some text, pretend it's an app back here</p>
        </div>
        <div id="modal-container">
            <div id="modal">This is a modal</div>
        </div>
        <footer style="min-height: 50vh">App Name</footer>
    </div>
</body>
<style>
    #modal-container {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);
    }

    #modal {
        background: white;
        border: 1px solid black;
        padding: 1rem;
        border-radius: 1rem;
    }

    footer {
        position: relative;
        background: lightblue;
        padding: 1rem;
    }
</style>
==================================================================================


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <script src="index.js"></script>
</head>

<body>

    <div>
        <div id="container">
            <div id="purple">Purple</div>
            <!-- <div id="blue">Blue</div> -->
            <div id="green">Green</div>
            <!-- <div id="purple">Purple</div> -->
            <div id="blue">Blue</div>
        </div>
    </div>
</body>
<style>
    #container {
        /* //display: relative; */
        position: relative;
    }

    #blue,
    #green,
    #purple {
        height: 100px;
        width: 100px;
        position: absolute;
        padding: 8px;
        color: white;
        border: 4px solid black;
        border-radius: 4px;
    }

    #blue {
        background: #0f2cbd;
        left: 50px;
        top: 50px;
    }

    #green {
        background: #007a70;
        left: 100px;
        top: 100px;
    }

    #purple {
        background: #5f00b2;
        left: 150px;
        top: 150px;
    }
</style>
=====================================================================


Understanding more rules of Painting Order

While relative positioning is one way that you can tell the browser to paint an element first, it's far from the only way to do so. Here's a list of CSS rules that will change the order an element paints in, from the lowest priority to the highest priority:

The background of the following tags: html, :root, body

The background of the stacking context root element----Come back to this at the end of the article; it won't make sense now.

Positioned elements with a negative z-index

Non-positioned elements' background

Elements with a float style applied without a position applied

Non-positioned inline elements

The text contents of non-positioned, non-floating elements, as well as a few other rules

Positioned elements without a z-index applied or with a z-index of 0, as well as a few other rules

Elements with a z-index of 1 or more

Depending on your browser, outlines