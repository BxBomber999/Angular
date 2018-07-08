let app = angular.module('calcApp', []);

app.controller('calcCtrl', calcCtrl);

function calcCtrl() {
  this.result = '0';
  this.operators = ['+', '-', '*', '/'];
  this.setOperator = function(op) {
    this.operator = op;
  };

  this.equals = function() {
    let number1 = parseFloat(this.firstOperand);
    let number2 = parseFloat(this.secondOperand);
    console.log('equals');
    switch (this.operator) {
      case '+':
        this.result = number1 + number2;
        break;
        console.log('adds');
        break;
      case '-':
        this.result = number1 - number2;
        break;
      case '*':
        this.result = number1 * number2;
        break;
      case '/':
        this.result = number1 / number2;
        break;
      default:
        this.result = 'Must select an Operation';
    }
  };
}
