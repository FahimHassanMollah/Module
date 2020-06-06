var array=[1,2,3,4,5];
console.log(array.map(function (value) {
    console.log(value * 10);
     return value*10;

}));

var x=[];
function mapArray(array,cb) {
    for (var i = 0; i <array.length ; i++) {
       var t= cb(array[i],i);
       x.push(t);
    }
    return x;
}
var t=mapArray(array,function (value,index) {
   return  value*20;
});

console.log(t);

// var copyArray=[];
