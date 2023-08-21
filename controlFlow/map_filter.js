// const coding = ["js", "ruby", "python", "cpp"]


// //
// const values = coding.forEach ((item) => {
//     console.log(item);
// });

// console.log(values);

// for each cannot return any values but filter can

let myNums = [1,23,4,532,6456,763,76]

//filter take callback
let new_nums= myNums.filter((num)=>num>100)
console.log(new_nums);

let new_nums1= myNums.filter((num) => {
    return num > 100
})
console.log(new_nums1);


