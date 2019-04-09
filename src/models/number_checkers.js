const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function(){

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('number-typed', (event) => {
    console.log(event);
    const inputNumber = event.detail;
    const isNumberPrime = this.numberIsPrime(inputNumber);
    PubSub.publish('number-checked', isNumberPrime);
  });
};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeChecker;
