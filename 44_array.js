// var arr=[1,2,3,'fahim'];
// arr[4]='hassan';
// arr[10]='dev';
// console.log(arr.length);
// console.log(arr);
// console.log(arr[5]);
// console.log(typeof arr[14]);
// var i=0;
// console.log(arr.includes(false));
// console.log(arr.includes(undefined));
// // while (arr[i]==null || arr[i]!==null)
// // {
// //     console.log('hi');
// //     i++;
// // }

var arr=[2,4,3,9,4,7,13,14,200];
var res=0;
for (var i=0;i<arr.length;i++){

    res+=arr[i];


}
console.log(res);
var even=0;
var odd=0;
for (var j=0;j<arr.length;j++)
{
    if (arr[j]%2===0)
    {
        even+=arr[j];
    }
    else {
        odd+=arr[j];
    }
}
console.log(even);
console.log(odd);























