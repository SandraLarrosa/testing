let { FizzBuzz } = require('../src/fizz_buzz');

describe('FizzBuzz', function () {
  it('return number between 0 and 100', function () {
    let fizzBuzz = new FizzBuzz(1);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers).toBe(1);
  });
});
