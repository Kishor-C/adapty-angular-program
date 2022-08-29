import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  childCounter: number = 0;
  
  increase() {
    this.childCounter++;
  }
  decrease() {
    this.childCounter--;
  }
  ngOnInit(): void {
  }

}
