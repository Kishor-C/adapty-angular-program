import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf-demo',
  templateUrl: './mdf-demo.component.html',
  styleUrls: ['./mdf-demo.component.css']
})
export class MdfDemoComponent implements OnInit {

  firstname : FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  lastname : FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    //this.loadValues();
  }
  loadValues() {
    this.firstname.setValue('Sachin');
    this.lastname.setValue('Tendulkar');
  }

}
