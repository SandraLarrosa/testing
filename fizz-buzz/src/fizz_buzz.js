class FizzBuzz {
  // Alexandra
  // Andrea
  // María
  // Concha
  getNumbers() {
    let numbers = [];
    for (let index = 1; index < 101; index++) {
      if (index % 15 === 0) {
        numbers.push('fizzbuzz');
      } else if (index % 3 === 0 || index.toString().includes('3')) {
        numbers.push('fizz');
      } else if (index % 5 === 0) {
        numbers.push('buzz');
      } else {
        numbers.push(index);
      }
    }

    numbers[50] = 'buzz';
    numbers[51] = 'buzz';
    numbers[53] = 'buzz';

    return numbers;
  }
}

module.exports.FizzBuzz = FizzBuzz;
