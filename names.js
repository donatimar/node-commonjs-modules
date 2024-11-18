function PersonName({ firstName, lastName }) {
  console.log(
    `Creazione oggetto: firstName=${firstName}, lastName=${lastName}`
  );
  return {
    firstName,
    lastName,
  };
}

module.exports = PersonName;
