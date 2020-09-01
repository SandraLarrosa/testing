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
        (this.contain5(index) && index.toString().includes('3')) ||
        (index % 3 === 0 && this.contain5(index))
      ) {
        numbers.push('fizzbuzz');
      } else if (index % 5 === 0 || this.contain5(index)) {
        numbers.push('buzz');
      } else if (index % 3 === 0 || index.toString().includes('3')) {
        numbers.push('fizz');
      } else {
        numbers.push(index);
      }
    }

    return numbers;
  }

  contain5(index) {
    return index.toString().includes('5');
  }
}

module.exports.FizzBuzz = FizzBuzz;
