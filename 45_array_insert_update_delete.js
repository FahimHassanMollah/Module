// var arr=[1,2,3,4,5,6,'fahim'];
//
// arr.push('hassan');
// arr.unshift('mollah');
// console.log(arr);
// arr.splice(0,1,'dev');
// console.log(arr);
// arr.splice(1,2);
// console.log(arr);
var arr=[1,2,3,4,5,6,7,8,9,10,5];
var num=0;
var checl=false;
for (var i=0;i<arr.length;i++)
{
    if (arr[i]===num)
    {
        console.log('found at '+i);
        checl=true;

    }

}
if (checl===false)
{
    console.log('not found');
}
