class FizzBuzz {
  // Alexandra
  // Andrea
  // María
  // Concha
  getNumbers() {
    let numbers = [];
    for (let index = 1; index < 101; index++) {
      if (
        index % 15 === 0 ||
        index === 35 ||
        index === 53 ||
        (index % 3 === 0 && index.toString().includes('5'))
      ) {
        numbers.push('fizzbuzz');
      } else if (index % 5 === 0 || index.toString().includes('5')) {
        numbers.push('buzz');
      } else if (index % 3 === 0 || index.toString().includes('3')) {
        numbers.push('fizz');
      } else {
        numbers.push(index);
      }
    }

    return numbers;
  }
}

module.exports.FizzBuzz = FizzBuzz;
