let { FizzBuzz } = require('../src/fizz_buzz');

describe('FizzBuzz', function () {
  it('return number 1', function () {
    let fizzBuzz = new FizzBuzz(1);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[0]).toBe(1);
  });

  it('return a number between 2 numbers', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[1]).toBe(2);
  });
});
