function pure(n) {

   return  n*n;

}

console.log(pure(45));
var f=10;
function notPure() {
    f=1000;
    console.log('not pure');
}

console.log(f);
notPure();
console.log(f);
console.log('-----------------------------------------------------------------');
var myObj={
    x:'Fahim dev',
    y:'web dev'
};
function f1(myObj) {
    myObj.x=10;
}

console.log(myObj);
f1(myObj);
console.log(myObj);















