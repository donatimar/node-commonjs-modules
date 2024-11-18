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
