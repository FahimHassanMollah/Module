var list=[1,-1,-2,-3,-4,-5];
console.log(list.reduce(function (prv, current, index, array) {
    console.log(prv);
    console.log(current);
    return prv+current;
}));

// var list=[155,-1,-2-3,200,-4,-5,0,156];
// console.log(list.reduce(function (prv, current, index, array) {
//     return Math.max(prv,current);
// }));

// function reduce(array,cb,accumulator) {
//
//     for (var i = 0; i <array.length ; i++) {
//
//         accumulator= cb(accumulator,array[i],i,array);
//
//     }
//     return accumulator;
//
// }
//
// console.log(reduce(list, function (prev, current, index, array) {
//     console.log(prev);
//     console.log(current);
//     return prev + current;
// },0));




