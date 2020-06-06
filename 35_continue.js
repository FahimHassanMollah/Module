while (true)
{
    var random=Math.floor(Math.random()*10+1);
    if (random===3 || random===2 || random===1 || random===4 || random===5 || random===6 || random===7 || random===8 || random===9 )
    {
        continue;
    }
    else {
        console.log(random + " numer");
    }
}