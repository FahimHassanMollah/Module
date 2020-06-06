// var date=new Date();
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toUTCString());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getTime());
// console.log(date.getSeconds());

var dates=new Date();
var today=dates.getDay();
switch (today) {
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesfday");
        break;
    case 4:
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log('not a day');

}
var s=40;
var z=30;
console.log(!(!(s > z)));
s=s>z ? 22:40;
console.log(s);






















