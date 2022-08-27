import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-demo',
  templateUrl: './tdf-demo.component.html',
  styleUrls: ['./tdf-demo.component.css']
})
export class TdfDemoComponent {
  firstname: string | undefined = undefined;
  lastname: string | undefined = undefined;
  dob: Date | undefined = undefined;

  // function that will be called on form submission
  handleForm(value: any) {
    console.log("__________________");
    console.log(value);
    // [this.firstname, this.lastname, this.dob] = value;
  }

}
