let arr = ["adel" , "ramadan"]

let res = arr.every((value) => {
    return value.toLowerCase() == value
})

console.log(res)