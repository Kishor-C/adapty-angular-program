import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf-builder-demo',
  templateUrl: './mdf-builder-demo.component.html',
  styleUrls: ['./mdf-builder-demo.component.css']
})
export class MdfBuilderDemoComponent implements OnInit {

  constructor(private _builder : FormBuilder) { }

  ngOnInit(): void {
  }

  profileForm = this._builder.group({
    firstname: ["", [Validators.required]], 
    lastname: ["", [Validators.required]], 
    phone: ["", [Validators.required, Validators.maxLength(10)]]
  });

  handleForm() {
    console.log("____________________________________")
    console.log(this.profileForm.value); 
    this.profileForm.reset({firstname:'VVV', lastname: 'YYYY'});
    //this.profileForm.controls['firstname'].setValue('Sachin');
  }

}
