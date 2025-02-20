arr = [1,2,3,4,4,5,5]

let result = arr.reduce((acc,value)=> {
    return acc+value
})
console.log(result)