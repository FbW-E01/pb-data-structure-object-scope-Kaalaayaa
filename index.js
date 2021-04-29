// # Scope

// **Instructions**
// 1. Create the following object: 
// ```javascript
const student = { 
  firstName: "John", 
  lastName: "Smith", 
  class: 12,
};
// ```

// 2. Create a method that prints the following: 
// ```javascript
console.log(`${student.firstName} ${student.lastName} is a student in class ${student.class}`)


function aboutStudent(){
    console.log(`${this.firstName} ${this.lastName} is a student in class ${this.class}`)
}
const sentence = aboutStudent.bind(student);
sentence();

student.aboutStudent = aboutStudent;
student.aboutStudent();
// "John smith is a student in class 12"
// ```

// 3. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
const person = {
    firstName: "Kalaya",
    lastName: "Chatelain",
    age: 26,
    job: "student",
    city: "Berlin"
}

function infoPerson(){
    console.log(`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.city}`)
}

person.infoPerson = infoPerson;
person.infoPerson();

const infoAboutPerson = infoPerson.bind(person);
infoAboutPerson();


// ## Bonus

// 3. Write a method to get the length of the person object.

const objectLength = Object.keys(person).length;
console.log(objectLength);