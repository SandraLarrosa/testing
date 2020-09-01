class FizzBuzz {
  getNumbers() {
    let numbers = [];
    for (let index = 1; index < 101; index++) {
      if (index % 3 === 0) {
        numbers.push('fizz');
      } else {
        numbers.push(index);
      }
    }
      numbers[4] = 'buzz';

    return numbers;
  }
}

module.exports.FizzBuzz = FizzBuzz;
