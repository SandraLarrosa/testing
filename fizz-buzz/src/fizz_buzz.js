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
        (this.contain5(index) && this.contain3(index)) ||
        (index % 3 === 0 && this.contain5(index))
      ) {
        numbers.push('fizzbuzz');
      } else if (index % 5 === 0 || this.contain5(index)) {
        numbers.push('buzz');
      } else if (index % 3 === 0 || this.contain3(index)) {
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
    
  contain3(index) {
    return index.toString().includes('3');
  }
}

module.exports.FizzBuzz = FizzBuzz;
