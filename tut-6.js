// remove duplicate using reduce.
let arr = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 8, 9, 10];

const uniqueValue = arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
}, []);

console.log(uniqueValue);
// [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]