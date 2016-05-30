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
console.log('student.height =', student.height); function Human() {
    this.name = 'Jack',
    this.age = 25,
    this.gender = 'male',
    this.height = 165,
    this.weight = 50
}
var newHuman = new Human();
console.log('newHuman =', newHuman);

function Work() {
    this.place = 'DTC';
    this.salary = 1000;
}

Work.prototype = newHuman;

var newWork = new Work();
console.log('newWork =', newWork);

console.log('newWork.weight =', newWork.weight);
console.log('newWork.age =', newWork.age);
console.log('newWork.name =', newWork.name);

function WatchTV() {
    this.learning = 'National University';
    this.grant = 2500;
}
WatchTV.prototype = newHuman;

var newWatchTV = new WatchTV();
console.log('newWatchTV =', newWatchTV);


console.log('newWatchTV.name =', newWatchTV.name);
console.log('newWatchTV.gender =', newWatchTV.gender);
console.log('newWatchTV.height =', newWatchTV.height);