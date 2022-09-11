function sumTwoSmallestNums(arr) {
arr.sort(function(a, b){return b - a})
let sum = 0
let newArr = []
 for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element >= 0) newArr.push(element)
 }
 for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];
    if(element === newArr[newArr.length-1]){
        sum += element
    }
    if(element === newArr[newArr.length-2]){
        sum += element
    }
 }
 console.log(sum)
 return sum
 }
  module.exports =sumTwoSmallestNums