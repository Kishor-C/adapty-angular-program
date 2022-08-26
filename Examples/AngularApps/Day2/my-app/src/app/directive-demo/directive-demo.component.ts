import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent  {  
  status: boolean = false;
  isAvailable: boolean = true;
  userObject = {name:"Raj"};
  products: string[] = ["Laptop", "Mobile", "Notepad"];
  users = [
    {name: "Alexandar", birthday: "1990-11-25", balance : 45000, gender: "Male"},
    {name: "Priya", birthday: "1991-12-25", balance : 35000, gender: "Female"},
    {name: "Mohan", birthday: "1990-09-20", balance : 25000, gender: "Male"},
    {name: "Teju", birthday: "1998-11-15", balance : 65000, gender: "Female"}
  ];
}
