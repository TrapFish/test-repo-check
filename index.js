//Find the missing number 
function createNArray(a){
  let nNaturalArray = [];
  for(let i =0 ; i <= a ; i++){
    nNaturalArray.push(i);
  }
  return nNaturalArray;
}

function sumOfElement(arr){
    let summation = arr.reduce((acc, val)=>{
       return acc += val;
    }, 0);
    return summation;
}

function findMissingNumber(a){
   let nNaturalArray = createNArray(a.length + 1);
   let sumNaturalNumber = sumOfElement(nNaturalArray);
   let sumProvidedArray = sumOfElement(a);
   return sumNaturalNumber - sumProvidedArray;
}

let arr = [1, 2, 4, 5, 6];
const result = findMissingNumber(arr);