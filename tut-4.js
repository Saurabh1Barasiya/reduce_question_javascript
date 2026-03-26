console.log("minimum value",Number.MIN_VALUE);  //5e-324

let arr = [5, 2, 9, 1, 7]
// const maxValue = arr.reduce((acc,curr)=>{
//     acc = Math.max(acc,curr);
//     return acc;
// },Number.MIN_VALUE);

const maxValue = arr.reduce((acc,curr)=>{
    acc = Math.max(acc,curr);
    return acc;
},0);

console.log("Maximum value",maxValue);
