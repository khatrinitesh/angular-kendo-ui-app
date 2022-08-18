import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

// const sliderValidator = (validRange: number[]) => (control) => {
//   return control.value[0] >= validRange[0] && control.value[1] <= validRange[1]
//     ? null
//     : {
//       valid: false,
//     };
// };

const SliderValidator = (validRange) => (control) => {
  return control.value[0] >= validRange[0] && control.value[1] <= validRange[1]
    ? null
    : {
      valid: false,
    };
};

@Component({
  selector: 'custom_rangeslideroverview',
  templateUrl: './rangeslideroverview.component.html',
  styleUrls: ['./rangeslideroverview.component.scss']
})
export class RangeslideroverviewComponent implements OnInit {

  public form: FormGroup;

  public userData: { price: number[] } = {
    price: [300, 400],
  };

  constructor() {
    this.form = new FormGroup({
      price: new FormControl(this.userData.price, SliderValidator([200, 500])),
    });
  }

  // public form = new FormGroup({
  //   slider: new FormControl([3, 5], sliderValidator([2, 6])),
  // });

  // public value: [number, number] = [3, 7];
  // public vertical = true;

  // public value: [number, number] = [50, 100]
  // public min = 0
  // public max = 200
  // public largeStep = 2
  // public smallStep = 20

  ngOnInit() {
  }

}
