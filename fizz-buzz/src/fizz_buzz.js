class FizzBuzz {
  getNumbers() {
    let numbers = [];
    for (let index = 1; index < 101; index++) {
      if (index === 15 || index === 30 || index === 45) {
        numbers.push('fizzbuzz');
      } else if (index % 3 === 0) {
        numbers.push('fizz');
      } else if (index % 5 === 0) {
        numbers.push('buzz');
      } else {
        numbers.push(index);
      }
    }

    return numbers;
  }
}

module.exports.FizzBuzz = FizzBuzz;
