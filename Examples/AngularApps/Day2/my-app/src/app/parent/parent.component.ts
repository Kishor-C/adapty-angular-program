import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
  name = "Sourav";

  nameItems = ["Virat", "Suraj", "Mohit", "Sony"]
 
}
