console.log("js avviato");

const PersonName = require("./names");

const person = PersonName({ firstName: "Marco", lastName: "Donati" });
console.log(person);
