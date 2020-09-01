class FizzBuzz {
  getNumbers() {
      let numbers = [];
      for (let index = 1; index < 5; index++) {
          numbers.push(index);
      }
      
    return numbers;
  }
}

module.exports.FizzBuzz = FizzBuzz;
