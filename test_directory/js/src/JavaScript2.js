function Human() {
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