function getPersonsInfo(name) {
  return server.getPeople().then(people => {
    return people.find(person => { return person.name === name });
  });
}

async function getPersonsInfo(name) {
  const people = await server.getPeople(); // ye getPeople() kaha sy aya isko to bnya hi nahi hai
  const person = people.find(person => { return person.name === name });
  console.log(person);
  return person;
}

const server = {
  people: [
    {
      name: "Odin",
      age: 20,
    },
    {
      name: "Thor",
      age: 35,
    },
    {
      name: "Freyja",
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};

getPersonsInfo('Thor');
getPersonsInfo('Freyja');

const yourAsyncFunction = async () => {
  // do something asynchronously and return a promise
  return result;
}

anArray.forEach(async item => {
  // do something asynchronously for each item in 'anArray'
  // one could also use .map here to return an array of promises to use with 'Promise.all()'
});


server.getPeople().then(async people => {
  people.forEach(person => {
    // do something asynchronously for each person
  });
});


asyncFunctionCall().catch(err => {
  console.error(err)
});


async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}
