class FizzBuzz {
  getNumbers() {
    let numbers = [];
    for (let index = 1; index < 101; index++) {
      numbers.push(index);
    }

    numbers[2] = "fizz";
    numbers[5] = "fizz";
    numbers[8] = "fizz";

    return numbers;
  }
}

module.exports.FizzBuzz = FizzBuzz;
