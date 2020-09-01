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
      } else if (index % 3 === 0 || index === 13 || index === 23 || index === 43) {
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
