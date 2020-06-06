var array=[0,12,1,4,15,3,10,2];
var arobj=[

    {
        name:'fahim',
        ages: 25
    },
    {
        name:'rahim',
        ages: 20
    },
    {
        name:'karim',
        ages: 18
    },
    {
        name:'saif',
        ages: 24
    }
];
array.sort(function (a,b) {
    if (a<b)
    {
        return -1;
    }
    else if (a>b)
    {
        return 1;
    }
    else {
        return 0;
    }
});
console.log(array);
arobj.sort(function (a,b) {
            if (a.ages<b.ages)
            {
                return -1;
            }
            else if (a.ages>b.ages)
            {
                return 1;
            }
            else {
                return 0;
            }
});
console.log(arobj);

console.log('some and every method ------------------------------------');

var x=[1,45,1,6,7,11,9,3,5,1];
// var d=x.every(function (valeu) {
//     return valeu%2===1;
// });
// console.log(d);

var d=x.some(function (valeu) {
    return valeu%2===0;
});
console.log(d);
















