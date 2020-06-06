
var arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,15,20,88,1000,50,66];
// arr.splice(0,1,2);
console.log(arr.length);
var copy=[];

for (var i=arr.length-1;i>=0;i--)
{

    copy.push(arr[i]);


}
console.log(copy);
console.log(arr);

for (var j=0;j<copy.length;j++)
{
    arr.splice(arr[j],1,copy[j]);
}
console.log(arr);
console.log("=============-------------------==============--------------------======================");

var array=[1,2,3,4,5,6,7,8,9];

for (var s=0;s<(array.length/2);s++)
{
    var temp=array[s];
    array[s]=array[array.length-1-s];
    array[array.length-1-s]=temp;
}
console.log(array);

























