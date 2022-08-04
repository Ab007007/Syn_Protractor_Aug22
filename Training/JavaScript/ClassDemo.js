const Student = require("./Student");

//class using expression
const Company = class {}

//class using declaration
class Employee {

    constructor(name,id)
    {
        this.name = name
        this.id = id
    }
}

let emp = new Employee("AHB" , "EMP111")

console.log(emp.name + " and " + emp.id);

const stu = new Student()

stu.setStudentDetails("SSS","ASDFASDFa","SADASDF")
console.log(stu.getStudentName());