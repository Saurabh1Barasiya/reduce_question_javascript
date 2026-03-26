let arr = [{ id: 1, name: "Saurabh" },{ id: 2, name: "Rahul" }];
// console.log(arr);

const obj = arr.reduce((acc,curr)=>{
    acc[curr.id] = curr;
    return acc;
},{});

console.log(obj);

/*
    { 
        '1': { id: 1, name: 'Saurabh' },
        '2': { id: 2, name: 'Rahul' }
    }
*/