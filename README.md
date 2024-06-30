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