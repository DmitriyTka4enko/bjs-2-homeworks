function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
	if (!this.hasOwnProperty('marks')) {
		return 0;
	}
	this.marks.push(...marks)
}

Student.prototype.getAverage = function () {
	if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
		return 0;
	}
	return parseFloat((this.marks.reduce((acc, i) => acc + i) / this.marks.length).toFixed(1))
}

Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason
}

let student1 = new Student('Василиса', 'женский', '19');
student1.setSubject('Algebra');
student1.addMarks(4, 5, 4, 5);


let student2 = new Student('Артём', 'мужской', '25');
student2.setSubject('Geometry');
student2.exclude('прогулы')