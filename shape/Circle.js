import { Shape } from "./Shape.js"

class  Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius
    }
    area(){
        console.log(Math.PI*(this.radius**2))
    }
}

const circle = new Circle(3)
circle.area()