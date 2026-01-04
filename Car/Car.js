import { Vehicle } from "./Vehicle.js"

class Car extends Vehicle{
    constructor(type,bread){
        super(type)
        this.bread = bread
    }
    info(){
        console.log("this is a",this.bread,this.type)
    }
}

