// Always requires the js files the functions are located in
const play = require('./play');

play.violin(); 
play.clarinet();

// Pattern1 - No need to call by using the function name since it is an anonymous function
const pattern1 = require('./patterns/pattern1');
console.log("Pattern 1...");
pattern1();

// Pattern2 - Must call by using the function name, since the function has a name
const pattern2 = require('./patterns/pattern2');
console.log("Pattern 2...");
pattern2.getName();

// Pattern3 - 
const pattern3 = require('./patterns/pattern3');
console.log("Pattern 3 - which is not a recommended pattern...");
pattern3.getName();
pattern3.name = 'Carie Woods'; 
pattern3.getName();

const changedPattern = require('./patterns/pattern3');
changedPattern.getName();

// Pattern 4 
console.log("Pattern 4...");
const pattern4 = require('./patterns/pattern4');
const Person = require('./patterns/pattern4');

const person1 = new Person();
person1.getName();
person1.name = 'Andre Santos'; 
person1.getName();

const person2 = new Person();
person2.getName();

// Pattern5 
const pattern5 = require('./patterns/pattern5').getName; 
pattern5();