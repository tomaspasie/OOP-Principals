# OOP-Principals

[![Build Status](https://travis-ci.com/tomaspasie/OOP-Principals.svg?branch=master)](https://travis-ci.com/tomaspasie/OOP-Principals)

Individual Homework: Explain OOP principles using JavaScript

Written by Tomas Pasiecznik

Encapsulation - When one would like to hide information in programming, encapsuation should be used. In the example I created, the dog object holds the dog's name and breed. However, if one would like to call the actual information about the dog's name and breed, they would have to go through the specific dog object to be able to access it. When Encapsulation.js is run, the name and breed of a created Dog object is displayed to the user in a way that properly accesses the variables.

Abstraction - Similar to encapsulation, when one would like to hide certain features of a program for better organization, abstraction should be used. In the example I created, we continue the Dog example and as you can see, "nameAndBreed" cannot be called directly. Instead, it will be called and displayed through the "dogInfo" function. It is a good practice to practice abstraction for when you work in larger, more complex projects.

Inheiritance - When working with objects that have similarities, it may be useful to use in heritance to avoid repitition in code. In the example I created, we can see the realtionship between Teacher and Student. The teacher is an instance of Person and likewise, the Student is also an instance of Person. However, the student is not an instance of Teacher and the teacher is not an instance of Student. This shows us that they are two distinct groups of people despite both being instances of Person.

Polymorphism - In polymorphism, methods of the same name/function call be called for object specific operations. In the example I created, each of the shapes call the area method but the operation that is carries out is shape specific.
