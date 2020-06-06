var obj1={
    name:'fahim',
    id:8322
};

var obj2={
    name:'fahim',
    id:83222
};
if (obj1.name===obj2.name&& obj1.id===obj2.id)
{
    console.log('true they are same obj');
}
else {
    console.log('they are not same');
}
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

console.log('=============================================================================');
console.log('=============================================================================');
var objFahim={
    firstNmae:'fahim',
    LastNmae:'hassan'
};
for (var objFahimKey in objFahim) {
    console.log(objFahimKey + ':' + objFahim[objFahimKey]);
}
console.log("===================================================");
var obj6={
    varsity:'daffodil',
    Campus:'dhanmondi'
};
console.log(Object.values(obj6));
console.log(Object.keys(obj6));
console.log(Object.entries(obj6));

var obj8=Object.assign({},obj6);
console.log(obj8);
obj8.rahim='change';
console.log(obj8);




































