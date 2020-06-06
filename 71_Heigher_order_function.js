function add(a,b) {
    return a+b;

}
function order(a,b,func) {
    var c=a+b;
    var d=a-b;
    function multyply() {

        return c * d * func(a, b);

    }
  return multyply;
}
var res=order(2,1,add);
console.log(res());
