import Shape from "./Shape.js";
class Rectangle extends Shape{
    constructor(name,height,width) {
        super(height,width);
        this.name=name;
    }
    draw() {
        console.log('overridden');
    }

    getName=function () {
        console.log(this.name+' ');
    }

}
export default Rectangle;