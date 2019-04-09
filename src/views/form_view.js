const PubSub = require('../helpers/pub_sub.js');

const FormView = function () {

};

FormView.prototype.bindEvents = function (event) {
  const form = document.querySelector("#prime-checker-form");
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputNumber = event.target.number.value;
    PubSub.publish('number-typed', inputNumber);
  });
};

module.exports = FormView;
