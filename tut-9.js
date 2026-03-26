// find even odd using reduce.
let arr = [1,2,3,4,5,6,7,8,9,10];

const ans = arr.reduce((acc,curr)=>{
    if(curr % 2 === 0){
        acc.even.push(curr);
    }else{
        acc.odd.push(curr);
    }

    return acc;
},
{even:[],odd:[]});

console.log("Even no..",ans.even);
console.log("Odd no..",ans.odd);


// Even no.. [ 2, 4, 6, 8, 10 ]
// Odd no.. [ 1, 3, 5, 7, 9 ]
