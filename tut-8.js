// find duplicate value using reduce method

let arr = [1,2,3,4,2,5,6,7,8,9];

const unique = arr.reduce((acc,curr)=>{
    if(acc.found){
        return acc;
    }

    if(acc.seen.includes(curr)){
        // means duplicate value mili hai.
        acc.found = curr;
    }else{
        acc.seen.push(curr);
    }

    return acc;
},{seen:[],found:null});

console.log(unique);