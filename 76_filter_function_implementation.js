var number=[1,2,3,4,5,6,7,8,9,10];
var newNumber=number.filter(function (value,index,array) {

   return  value%2===0;

});
console.log(newNumber);
console.log('----------------------------------------------');
var mywNumber=[];
function myFilter(number,qbf) {
    for (var i = 0; i <number.length ; i++) {
       var resTF= qbf(number[i],i,number);
       if (resTF)
       {
           mywNumber.push(number[i]);
       }
    }
    return mywNumber;
}

console.log(myFilter(number, function (value, index, array) {
    return value % 2 !== 0;
}));
