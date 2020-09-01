let { FizzBuzz } = require('../src/fizz_buzz');

describe('FizzBuzz', function () {
  it('return number 1', function () {
    let fizzBuzz = new FizzBuzz(1);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[0]).toBe(1);
  });

  it('return number 2', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[1]).toBe(2);
  });


  it('return a number 4', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[3]).toBe(4);
  });

  it('return an array of 100 numbers', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers.length).toBe(100);
  });

  
  it('return name fizz position 3', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[2]).toBe('fizz');
  });
});
