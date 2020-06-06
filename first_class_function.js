// as a variable
// function fun(myName) {
//     return 'hi '+myName;
// }
// var name=fun;
// console.log(fun());
// console.log(name(' fahim dev'));




//store function as a array
// function fun(myName) {
//     return 'hi '+myName;
// }
// var arrays=[1,2,fun];
// console.log(arrays);
// console.log(arrays[2]('Fahim hassan'));
// console.log(arrays[2]);



// A function can be stored as a object property

// function fun(myName) {
//     return 'hi '+myName;
// }
//
// var objectFun={
//     name:fun,
//     age:8322,
// };
// console.log(objectFun);
// console.log(objectFun.name('fahim Hassan'));
// objectFun.name='changed';
// console.log(objectFun);



// we can create function as we need

// var add= 5+ (function () {
//     return 7;
// }());
// console.log(add);




//we can pass function as a arguments
// function main(a,b,add) {
//     return add(a,b);
// }
//
// console.log(main(1, 2, function (a, b) {
//     return a + b;
// }));


// return statement and inner function
// function outer(a,b) {
//     function inner() {
//         return a+b;
//
//     }
//     function mul() {
//         return a*b;
//     }
//   return [mul(),inner()];
// }
//
// console.log(outer(5, 2));



// call back function function
function opreation(a,b) {
    return a*b;
}

function fun(a,b,opreation) {

    return opreation(a,b);
}

console.log(fun(5, 2, function (a, b) {
    return a + b;
}));
console.log(fun(5, 2, function (a, b) {
    return a - b;
}));








































