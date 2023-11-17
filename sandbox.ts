// arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// names.push(3); //possible
// names[1] = 3; //not possible

let numbers = [10, 20, 12, 15];

numbers.push(25);
// numbers.push('shaun'); //not possible
// numbers[0] = 'shaun'; //possible, 

let mixed = ['ken', 4, 'chun-li', 8, 9];

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3; //possible, doesn't matter if it was previously string, number as the array as a whole accepts mixed data type

// objects
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};

ninja.age = 40; //possible
ninja.name = 'ryu'; //possible
// ninja.age = '30'; //impossible
// ninja.skills = ['fighting', 'sneaking'] //Impossible as the object has to take only 3 elements

ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 40,
  // skills: ['running'],
};