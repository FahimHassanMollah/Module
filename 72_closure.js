var b=10;

function foo() {
    var x=5;
    function inner() {
        return x;
    }
    return inner;
}
var abc=foo();
console.log(abc);

