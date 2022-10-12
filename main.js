class Engineer extends Person {
  constructor(name, age, gender, salary, deprt, uni) {
    super(name, age, gender, salary)
    this.deprt = deprt;
    this.uni = uni;
  }
}
console.log('class')
let p1 = new Person('ali', 24, 'male', 5000);
let p2 = new Person('amr', 24, 'male', 5000);
let p3 = new Person('ali', 24, 'male', 5000);
let p4 = new Person('ali', 24, 'male', 5000);

console.log(p1, p2);