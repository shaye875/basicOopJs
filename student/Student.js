import { Person } from "./Person.js"

class Student extends Person{
    constructor(name,school){
        super(name)
        this.school = school
    }
    study(){
        console.log(this.name,"is studying as",this.school)
    }
}