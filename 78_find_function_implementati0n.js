var list=[10,6,-5,-3,-3,-5];
console.log(list.find(function (value, index) {
    if (value%2===0) {
        // console.log(index);
        return true;
    }
}));

// var x=list.findIndex(function (value,index) {
//     if (value%2===0)
//     {
//
//         return 1;
//     }
// });
// console.log(x);


function find(list,cb) {
    for (var i = 0; i <list.length ; i++) {
       var T= cb(list[i],i);
       if (T)
       {
           return i;
       }
    }
}

console.log(find(list, function (value, index) {
    if (value % 2 === 0) {
        return true;
    }
}));

