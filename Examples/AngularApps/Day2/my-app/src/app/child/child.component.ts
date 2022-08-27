import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  username = "Sachin";

  @Output()
  childEventProperty: EventEmitter<number> = new EventEmitter<number>();
  // this is automatically called after the component is loaded into the DOM
  ngOnInit() {
    this.childEventProperty.emit(250);
  } 

}
