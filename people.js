console.log("js avviato");

const PersonName = require("./names");
const person = PersonName({ firstName: "Marco", lastName: "Donati" });
console.log(person);

const myHobbies = require("./hobbies");
const hobbiesList = myHobbies({
  hobbyOne: "Sport",
  hobbyTwo: "Videogames",
  hobbyThree: "Reading",
});

console.log(hobbiesList);

function createPersonProfile() {
  const personDetails = PersonName({ firstName: "Marco", lastName: "Donati" });

  const hobbiesDetails = myHobbies({
    hobbyOne: "Sport",
    hobbyTwo: "Videogames",
    hobbyThree: "Reading",
  });

  return {
    firstName: personDetails.firstName,
    lastName: personDetails.lastName,
    hobbies: hobbiesDetails.hobbies,
  };
}

console.log(createPersonProfile());
