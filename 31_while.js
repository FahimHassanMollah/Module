var a;
while ( true)
{


    // Math.floor(Math.random() * 10 + 1) === 9 ? console.log("winner"):console.log('try again');
   var l= Math.floor(Math.random()*10+1);
   if (l===9)
   {
       console.log('winner');
       break;
   }
   else {
       console.log('try gain');
   }

}
console.log("-----------------------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------------------");
for (; ;){
    var l= Math.floor(Math.random()*10+1);
    if (l===9)
    {
        console.log('winner');
        break;
    }
    else {
        console.log('try gain');
    }
}