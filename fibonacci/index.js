function fibs(n){
    result = [0, 1]
    for (let i = 2; i < n; i++){
        result.push(result[i - 2] + result[i - 1])
    }
    return result
}

array = []

function fibsRec(n, sequence = [0,1]){
    if (sequence.length >= n){
        return sequence
    } return fibsRec(n, [...sequence, sequence[sequence.length - 2] + sequence[sequence.length - 1]])
}

console.log(fibs(8))
console.log(fibsRec(8))
