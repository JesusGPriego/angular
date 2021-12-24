import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  brand = 'BMW';
  color = 'avantablack';
  //property binding
  soldTextProperty = 'Car is not sold';
  soldProperty = false;
  hybridProperty = false;
  madeInProperty = 'Madrid';
  //toggle a binded property
  toggleSoldProperty() {
    this.soldProperty = !this.soldProperty;
    this.toggleSoldTextProperty(this.soldProperty);
  }
  toggleSoldTextProperty(sold: Boolean) {
    if (sold) {
      this.soldTextProperty = 'car is sold';
    } else {
      this.soldTextProperty = 'car is not sold';
    }
  }
  toggleHybrid(event: Event) {
    if ((<HTMLInputElement>event.target).value == 'yes') {
      this.hybridProperty = true;
    } else {
      this.hybridProperty = false;
    }
    console.log(this.hybridProperty);
  }
  //eventBiding:
  sellCar() {
    this.toggleSoldProperty();
  }
}
