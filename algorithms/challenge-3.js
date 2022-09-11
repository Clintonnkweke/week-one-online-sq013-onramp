function sumMix(arr) {
    let sum = 0
   for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += parseInt(element)
   }
   console.log(sum)
   return sum
 }

module.exports = sumMix