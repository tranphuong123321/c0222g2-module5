import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public num1: number;
  public num2: number;
  public result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  public tinhToan(value) {
    console.log(this.num1);
    console.log(this.num2);
    console.log(value);
    if (value === '+') {
      this.result = Number(this.num1) + Number(this.num2);
    }
    if (value === '-') {
      this.result = Number(this.num1) - Number(this.num2);
    }
    if (value === '*') {
      this.result = Number(this.num1) * Number(this.num2);
    }
    if (value === '/') {
      this.result = Number(this.num1) / Number(this.num2);
    }
  }

}
