var arr=[
    [60,70,80,90],
    [40,50,60,55],
    [30,60,90,80]
];
console.log(arr);

for (var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    for (var j=0;j<arr[i].length;j++)
    {
        console.log('array '+i+' '+arr[i][j]);
    }
}