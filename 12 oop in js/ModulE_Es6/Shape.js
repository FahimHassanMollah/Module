let _info=new WeakMap();
class Shape {
    constructor(height,width) {
        _info.set(this,()=>{
            console.log(this.height + ' is the height value and ' + this.width + ' is the width value');
        });
        this.height=height;
        this.width=width;
    }
    draw(){
        _info.get(this)();
        console.log('this is draw method and result is '+this.height * this.width);
    }
}
export default Shape