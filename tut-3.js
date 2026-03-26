let arr = ["a","b","a","c","b","a"];
const freqCount = arr.reduce((acc,curr)=>{
    if(!acc[curr]){
        acc[curr] = 1
    }else{
        acc[curr] += 1
    }
    return acc;
},{});

console.log(freqCount);  // { a: 3, b: 2, c: 1 }