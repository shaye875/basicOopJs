import { Shape } from "./Shape.js"

class Square extends Shape{
    constructor(side){
        super()
        this.side = side
    }
    area(){
        console.log(this.side**2)
    }
}