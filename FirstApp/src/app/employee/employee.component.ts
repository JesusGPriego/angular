import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name = 'John';
  surname = 'Doe';
  private age = 25;

  getAge() {
    return this.age;
  }
}
