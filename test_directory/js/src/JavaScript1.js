var human = {
    name: 'Jack',
    age: 25,
    gender: 'male',
    height: 165,
    weight: 50,
};
console.log(human);

var worker = {
    work: function () {
        place: 'DTC';
        salary: 1000;
    }
};

worker.work();
console.log(worker.work);

var student = {
    watchTV: function () {
        learning: 'National University';
        grant: 2500;
    }
};

student.watchTV();
console.log(student);

worker.__proto__ = human;
console.log('-------------');
console.log('worker.name =', worker.name);
console.log('worker.age =', worker.age);
console.log('worker.gender =', worker.gender);
console.log('worker.height =', worker.height);

student.__proto__ = human;
console.log('-------------');
console.log('student.name =', student.name);
console.log('student.age =', student.age);
console.log('student.gender =', student.gender);
console.log('student.height =', student.height);