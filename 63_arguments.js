function funny(a,b,c) {
   var res=0;
    for (var i = 0; i <arguments.length ; i++) {
        res+=arguments[i];
    }
    return res;
}
// var t1={
//     1:1,
//     2:2,
//     fahim:45
// };
//
//
// console.log(t1['1']);
// console.log(t1["2"]);
// console.log(t1.length);
// for (var j = 0; j <t1.length ; j++) {
//     console.log('hi');
//     console.log(t1[j]);
// }
//
//
// var c={
//     4:100,
//     5:200,
//     fahim:30
// };
// console.log(c["fahim"]);
console.log(funny(200,100,500,500));
