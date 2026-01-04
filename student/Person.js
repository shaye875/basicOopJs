export class Person{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log("Hello, i'm",this.name)
    }
}