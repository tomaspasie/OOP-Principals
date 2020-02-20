const Person = require('../Inheritance');
const Teacher = require('../Inheritance');
const Student = require('../Inheritance');

test('Inheritance Test', () => {
    Teacher.prototype = new Person();
    Teacher.prototype.inheritanceTest = Teacher;
    var teacherOne = new Teacher("Nancy Makar", "nancymakar@njit.edu", "English");
    expect(teacherOne instanceof Person).toBe(true);

    Student.prototype = new Person();
    Student.prototype.inheritanceTest = Student;
    var studentOne = new Student("Tomas Pasie", "tomaspasie@gmail.com","English", "A");
    expect(studentOne instanceof Person).toBe(true);

    expect(teacherOne instanceof Student).toBe(false);
});