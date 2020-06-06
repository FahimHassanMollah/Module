// default for each provide by js

var arra=[1,2,3,4,5,6];
arra.forEach(function (value,index,arra) {
    console.log(value, index, arra);
    return value;
});



console.log('========================');

// implementation of foreach by me
function forArray(array,callBack) {
    for (var i = 0; i <array.length ; i++) {

     callBack(array[i],i,array);

    }

}
var sum=0;
var a=forArray([1,2,3,4,5],function (value,index,array) {

    sum+=value;
    return sum;


});
console.log(a);


// console.log(sum);
console.log('--------------------------');
// function fahi(ary,cbf) {
//
//    return  cbf(ary);
// }
// var x=fahi([1,2,3],function (ary) {
//         return 5;
// });
// console.log(x);
