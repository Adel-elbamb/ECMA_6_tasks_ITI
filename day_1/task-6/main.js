let arr = ["adel", "ahmad", "ali"];

let result = arr.map((value) => {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});

console.log(result); 

