function secondLargest(arr) {
  arr.sort(function(a, b){return a - b})
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === arr[arr.length-2]){
        console.log(element)
        return element
    }
  }
}
module.exports = secondLargest