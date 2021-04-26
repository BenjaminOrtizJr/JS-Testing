/* 
The Fizzbuzzkata.js file should be able to achieve following tests:

1. Can I call FizzBuzz
2. Get “1” when I pass in 1 - PASSED
3. Get “2” when I pass in 2 - PASSED
4. Get “Fizz” when I pass in 3
5. Get “Buzz” when I pass in 5
6. Get “Fizz” when I pass in 6 (a multiple of 3)
7. Get “Buzz” wen I pass in 10 (a multiple of 5)
8. Get “FizzBuzz” when I pass in 15 (a multiple of 3 and 5)

In the fizzbuzzkata.js file, write a code that should achieve above tests through failing test, production test and the refractor test. 
*/

// Resource: https://www.youtube.com/watch?v=m43Ma_8TPH0

const expect = require('chai').expect;
const fizzBuzz = require('../fizzBuzzKata');

describe('FizzBuzz >', () => {
    it('OK, FizzBuzz returns 1', () => {
        expect(fizzBuzz(1)).to.equal(1);
    })

    it('OK, FizzBuzz returns 1', () => {
        expect(fizzBuzz(2)).to.equal(2);
    })

    it('OK, returns "Fizz" for 3', () => {
        expect(fizzBuzz(3)).to.equal("Fizz");
    })

    it('OK, returns "Fizz" for multiples of 3', () => {
        expect(fizzBuzz(6)).to.equal("Fizz");
    })

    it('OK, returns "Buzz" for 5', () => {
        expect(fizzBuzz(5)).to.equal("Buzz");
    })

    it('OK, returns "Buzz" for multiples of 5', () => {
        expect(fizzBuzz(10)).to.equal("Buzz");
    })

    it('OK, returns "FizzBuzz" for multiples of 3 and 5', () => {
        expect(fizzBuzz(15)).to.equal("FizzBuzz");
    })
});