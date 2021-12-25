import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculator';
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  add(): void {
    this.result = this.num1 + this.num2;
  }
  substract(): void {
    this.result = this.num1 - this.num2;
  }
}
