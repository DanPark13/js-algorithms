function merge(leftArray, rightArray){
    let sortedArray = []

    while (leftArray.length && rightArray.length){
        // Insert smallest item into sorted array
        if (leftArray[0] < rightArray[0]) {
            sortedArray.push(leftArray.shift())
        } else {
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray]
}

function mergeSort(array){
    // Base Case: when we have single digits, 
    // we want to start merging
    if (array.length <= 1){
        return array
    }

    // Split until we have single digits
    let middle = Math.floor(array.length / 2)

    let left = mergeSort(array.slice(0, middle))
    let right = mergeSort(array.slice(middle))

    return merge(left, right)
}

console.log(mergeSort([7,5,1,8,5,8,4,7,3,3,7,4]))