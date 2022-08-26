import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  isDisabled : boolean = false;
  status = true;
  counter : number = 0;
  // first name that is initially undefined
  firstname: undefined | string = undefined;

  handleEvent() : void {
    this.counter++;
    if(this.counter % 3 == 0) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }
  handleInput(v: any) {
    console.log('v = ', v);
  } 
}
