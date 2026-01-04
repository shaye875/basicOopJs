import { animal } from "./Animal.js"

class Dog extends animal{
    bark(){
        console.log(this.name,"barks")
    }
}

const dogi = new Dog("Rocky")
dogi.speak()
dogi.bark()