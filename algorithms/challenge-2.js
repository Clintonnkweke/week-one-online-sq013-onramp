function filterArray(arr) {
    let filterarr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element - 0){
            filterarr.push(element)
        }
    }
    console.log(filterarr)
    return filterarr
}

module.exports = filterArray