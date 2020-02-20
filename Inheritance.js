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

module.exports = Person;
module.exports = Teacher;
module.exports = Student;