import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent {
  a = 0;
  b = 0;
  result = 0;

  add() {
    this.result = this.a + this.b;
  }

  subtract() {
    this.result = this.a - this.b;
  }

  multiply() {
    this.result = this.a * this.b;
  }

  divide() {
    this.result = this.a !== 0 && this.b !== 0 ? this.a / this.b : 0;
  }
}
