var myfun= function () {
    console.log('checker function');
}
var hisfun=myfun;

myfun();

setTimeout(function () {
    console.log('hellow boss I am here');
},200);
hisfun();

var name='fahim hassan Mollah';
var c=name.split(' ');
console.log(typeof c);
console.log(c);
var d=['fahim','rahim'];
console.log( d);


