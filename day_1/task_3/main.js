var fruits = ["apple", "strawberry", "banana", "orange", 
    "mango"]

// ========================a============
let cheack = fruits.every((value,index)=>
{
    return typeof(value) == "string"
})

console.log(cheack)

// =====================b==============
let start_a = fruits.some((value,index)=>{
    return value.charAt(0) == "a"
})

console.log(start_a)
// ======================c===========
let fliter_arr = fruits.filter((value,index)=>{
    return value.charAt(0) == "b" || value.charAt(0) == "s"
})
console.log(fliter_arr)
// =======================map============
let map_arr = fruits.map((value,index)=>{
    return `I love ${value} `
})
let x = map_arr.filter((value,index) => {
    return value
})
console.log(x)