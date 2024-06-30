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



