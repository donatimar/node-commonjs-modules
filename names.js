function PersonName({ firstName, lastName }) {
  console.log(`Identità: Nome= ${firstName}, Cognome= ${lastName}`);
  return {
    firstName,
    lastName,
  };
}

module.exports = PersonName;
