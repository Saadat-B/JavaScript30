// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age,age2);
// age = 1
// console.log(age,age2);


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

const team = players;
console.log(players);
console.log(team);
team[0] = "bosss"
console.log(players);
console.log(team);

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

const team2 = players.slice();
console.log(team2);
team2[0] = "woah";
console.log(team2);


// or create a new array and concat the old one in

// or use the new ES6 Spread

const team3 = [...players];
console.log(team3);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:

// how do we take a copy instead?

const person2 = Object.assign({},person, {age : 100});
console.log(person2);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it