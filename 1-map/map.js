// MAP method

const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'ana',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'jim',
    age: 35,
    position: 'developer',
  }
];

const ages = people.map((person) => person.age * 2);

//console.log(ages);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age+20,

  };
});

console.log(newPeople);

const names = people.map((person)=>`<h2>${person.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML = names.join('');
