function sub(array) {

    var result=0;
    for (var i = 0; i <array.length ; i++) {
        result+=array[i];
    }
    console.log(result);
}
sub([2,3,4,5,100]);