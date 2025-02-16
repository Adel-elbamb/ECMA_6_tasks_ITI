function check(arr, length) {
    let res = arr.filter((value) => {
      return value.length > length;
    });
    return res;
  }
  
  let x = check(["ali", "adel"], 3);
  console.log(x); 
  
  