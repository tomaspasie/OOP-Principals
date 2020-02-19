function Person (name, email){
    this.name = name;
    this.email = email;
}

function Teacher (name, email, subject){
    Person.call(this, name, email);
    this.subject = subject;
}

function Student (name, email, classes, grades){
    Person.call(this, name, email);
    this.classes = classes;
    this.grades = grades
}

Teacher.prototype = new Person();
Teacher.prototype.inheritanceTest = Teacher;
var teacherOne = new Teacher("Nancy Makar", "nancymakar@njit.edu", "English");

Student.prototype = new Person();
Student.prototype.inheritanceTest = Student;
var studentOne = new Student("Tomas Pasie", "tomaspasie@gmail.com","English", "A");

console.log(teacherOne instanceof Person);
console.log(studentOne instanceof Person);
console.log(teacherOne instanceof Student);
console.log(studentOne instanceof Teacher);