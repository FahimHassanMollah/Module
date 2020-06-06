// function base(number, cb,power) {
//   return  cb(number,power);
//
// }
// var x=base(3,function (number,power) {
//     var resl=1;
//     for (var i = 0; i <power ; i++) {
//         resl*=number;
//     }
//     return resl;
// },3);
// console.log( x);
// function base(number) {
//     var resl=1;
//     return function (power) {
//
//     for (var i = 0; i <power ; i++) {
//         resl*=number;
//     }
//     return resl;
//     }
// }
// var f=base(10);
// console.log(f(10));
