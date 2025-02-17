
function showCourse(options = {}) {
    let defaultValues = {
        cName: " ",
        cDescription: "defult",  
        cOwner: "defult"
    };

    let course = Object.assign({}, defaultValues, options); 

    console.log(`cName= ${course.cName}
cDescription= ${course.cDescription}
cOwner = ${course.cOwner}`);
}

showCourse({ cName: "Adel",cDescription:"c++" ,cOwner:"Adel" });

