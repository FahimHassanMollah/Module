//function can be stored in a variable

function store(one,two) {
    console.log('store function ' + one + ' ' + two);
}
var functionStore=store;
functionStore('fahim','hassan');
store(1,2);
console.log('................................................................');
var f=function () {
    console.log('i am a function expression and also a annonymous function');
}
var check=f;
check();
f();
console.log('--------------------------------------------------------------------------');

// A function store in an array

function add(a,b) {
    return (a + b);
}
var arr=[];
arr.push(add);
console.log(arr);
console.log(arr[0](2, 3));
console.log('==================================');
// A function can be stored in a object

var funObj={
    functions:add
};
console.log(funObj);
console.log(funObj.functions(2, 4));

console.log('-------------------------------');
var a='fahim hassan';
console.log(a);
var rev=a.split('');
console.log(rev);
for (var i = 0; i <a.length/2 ; i++) {

    var temp=rev[i];
    // console.log(a.length - 1 - i);
    rev[i]=rev[rev.length-1-i];

    // console.log(a[a.length - 1 - i]);
    // console.log(a[i]);
    rev[rev.length-1-i]=temp;


}
console.log(rev.join('').toString());




















































