class FizzBuzz {
  // Alexandra
  // Andrea
  // María
  // Concha
  getNumbers() {
    let numbers = [];
    for (let index = 1; index < 101; index++) {
      const fizzValue = this.calculateFizzValue(index);
      numbers.push(fizzValue);
    }

    return numbers;
  }

  calculateFizzValue(index) {
    if (
      index % 15 === 0 ||
      (this.contain5(index) && this.contain3(index)) ||
      (index % 3 === 0 && this.contain5(index))
    ) {
      return 'fizzbuzz';
    } else if (index % 5 === 0 || this.contain5(index)) {
      return 'buzz';
    } else if (index % 3 === 0 || this.contain3(index)) {
      return 'fizz';
    } else {
      return index;
    }
  }

  contain5(index) {
    return index.toString().includes('5');
  }

  contain3(index) {
    return index.toString().includes('3');
  }
}

module.exports.FizzBuzz = FizzBuzz;
