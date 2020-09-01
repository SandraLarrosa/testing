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

  it('return name fizz position 6', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[5]).toBe('fizz');
  });


  it('return name fizz position 9', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[8]).toBe('fizz');
  });

  it('return name buzz position 5', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[4]).toBe('buzz');
  });

  it('return name buzz position 10', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[9]).toBe('buzz');
  });

  it('return name buzz position 20', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[19]).toBe('buzz');
  });

  it('return name fizzbuzz position 15', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[14]).toBe('fizzbuzz');
  });

  it('return name fizzbuzz position 30', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[29]).toBe('fizzbuzz');
  });

  it('return name fizzbuzz position 45', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[44]).toBe('fizzbuzz');
  });

  it('return name fizz position 13', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[12]).toBe('fizz');
  });

  it('return name fizz position 23', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[22]).toBe('fizz');
  });

  it('return name fizz position 43', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[42]).toBe('fizz');
  });

  it('return name buzz position 56', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[55]).toBe('buzz');
  });

  it('return name buzz position 52', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[51]).toBe('buzz');
  });

  it('return name buzz position 54', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[53]).toBe('buzz');
  });

  it('return name fizzbuzz position 35', function () {
    let fizzBuzz = new FizzBuzz(1, 100);

    let numbers = fizzBuzz.getNumbers();

    expect(numbers[34]).toBe('fizzbuzz');
    
  });

});
