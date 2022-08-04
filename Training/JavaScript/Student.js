class Student {

    setStudentDetails(name, id, phone) {
        this.name = name;
        this.id = id
        this.phone = phone
    }

    getStudentName() {
        return this.name
    }

    getStudenID(){
        return this.id
    }

    getPhone(){
        return this.phone
    }
 
}

let emp = new Student()
emp.setStudentDetails("Aravinda" , "STU123" , 7878788)

console.log(emp.getStudentName());


module.exports = Student