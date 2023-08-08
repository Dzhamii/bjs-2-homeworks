function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Alex", "male", 27);
let student2 = new Student("Samanta", "female", 24);


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if (!this.excluded) {
        this.marks.push(...marksToAdd);
  } 
}

Student.prototype.getAverage = function () {
  if (this.marks && this.marks.length > 0) {
    const sum = this.marks.reduce((total, mark) => total + mark, 0);
    return sum / this.marks.length;
  } else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;  
}

student1.setSubject("Algebra"); 
console.log(student1.getAverage());
student1.addMarks(4,5,4,5);
console.log(student1);


