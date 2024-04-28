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

  // filter
  const young = people.filter((person) => {
    /*if (person.age < 30) {
        return person;
    }*/
    return person.age < 30;
  });

  //console.log(young);

  const developers = people.filter((person) => person.position == 'developer')
  //console.log(developers);

  //no match

  const senior = people.filter((item) => item.position == 'senior dev');
  console.log(senior);