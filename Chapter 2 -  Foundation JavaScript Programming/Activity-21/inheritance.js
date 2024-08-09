// Base class for people
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  getDetails() {
      return `${this.name}, Age: ${this.age}`;
  }
}

// Derived class for Students
class Student extends Person {
  constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
  }

  getDetails() {
      return `${super.getDetails()}, Grade: ${this.grade}`;
  }

  study() {
      return `${this.name} is studying.`;
  }
}

// Derived class for Teachers
class Teacher extends Person {
  constructor(name, age, subject) {
      super(name, age);
      this.subject = subject;
  }

  getDetails() {
      return `${super.getDetails()}, Subject: ${this.subject}`;
  }

  teach() {
      return `${this.name} is teaching ${this.subject}.`;
  }
}

// School management system
class School {
  constructor() {
      this.people = [];
  }

  addPerson(person) {
      this.people.push(person);
  }

  listPeople() {
      return this.people.map(person => person.getDetails()).join('\n');
  }

  findPerson(name) {
      return this.people.find(person => person.name === name);
  }
}

// Create a new school
const school = new School();

// Add people to the school
const student1 = new Student('Alice', 14, '9th Grade');
const student2 = new Student('Bob', 16, '11th Grade');
const teacher1 = new Teacher('Mr. Smith', 40, 'Mathematics');

school.addPerson(student1);
school.addPerson(student2);
school.addPerson(teacher1);

// List all people in the school
console.log('People in the school:');
console.log(school.listPeople());

// Find a person by name
const nameToFind = 'Alice';
const foundPerson = school.findPerson(nameToFind);
console.log(`\nFound person with name ${nameToFind}:`);
console.log(foundPerson ? foundPerson.getDetails() : 'Person not found');

// Demonstrate specific behaviors
console.log(`\nSpecific behaviors:`);
console.log(student1.study());
console.log(teacher1.teach());
