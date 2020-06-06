// function recursion(number) {
//     if (number<0)
//     {
//         return ;
//     }
//
//     recursion(number-2);
//     console.log(number);
//
// }
// recursion(6);



// 1 to n addition

// function sum(n) {
//     if (n===0)
//     {
//         return 0;
//     }
//    return n+sum(n-1);
//
// }
//
// console.log(sum(5));


// n to n addition

// function sum(m,n) {
//     if (m>n)
//     {
//         return 0;
//     }
//     return m+sum(m+1,n);
// }
//
// console.log(sum(5, 10));




// factorial
// function factorial(n) {
//     if (n===1)
//     {
//         return 1;
//     }
//     return n*factorial(n-1);
// }
//
// console.log(factorial(6));



// array element addition
// var arry=[1,2,3,4,5];
// function arrayAddition(array,lastelement) {
//     if (lastelement<0)
//     {
//         return 0;
//     }
//     return arry[lastelement]+arrayAddition(array,lastelement-1);
// }
//
// console.log(arrayAddition(arry, arry.length - 1));











// using recursion even number addition
// var arr=[1,2,3,4,5,6,7,8,9,10,11,12];
// function addition(arr,lastElement) {
//
//     if (lastElement<0)
//     {
//         return 0;
//     }
//
//     return  arr[lastElement]+addition(arr, lastElement - 1);
//
//
// }
// console.log(addition(arr.filter(function (value) {
//     return value % 2 === 0;
// }),(arr.filter(function (value) {
//     return value % 2 === 0;
// })).length-1));


function addition(start,end) {
    if (end%2===0)
    {
        if (end<start)
        {
            return 0;
        }
        return end+addition(start,end-2);
    }
    else {
        if (end<start)
        {
            return 0;
        }
        return end-1+addition(start,end-2);
    }


}

console.log(addition(0, 5));




















































































































































