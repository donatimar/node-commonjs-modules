function myHobbies({ hobbyOne, hobbyTwo, hobbyThree }) {
  console.log(`Lista hobby: ${hobbyOne}, ${hobbyTwo}, ${hobbyThree}`);
  return {
    hobbies: [hobbyOne, hobbyTwo, hobbyThree],
  };
}

module.exports = myHobbies;
