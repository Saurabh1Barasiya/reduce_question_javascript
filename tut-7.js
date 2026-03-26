const arr = [
  { item: "pen", price: 10 },
  { item: "book", price: 50 },
  { item: "bag", price: 100 }
];

// const totelPrice = arr.reduce((acc,curr)=>{
//     acc = acc + curr.price;
//     return acc;
// },0);

// console.log(totelPrice);  // 160

const totelPrice = arr.reduce((acc,curr)=>acc+curr.price,0);
console.log(totelPrice); // 160