import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild("tf1")
  private element1 !: ElementRef;
  
  @ViewChildren("tf2")
  private elementList !: QueryList<ElementRef>;
  
  counter2parent : number = 0;

  @ViewChild("childCmp")
  private cmp !: ChildComponent ; // initialized once #childCmp is loaded in DOM

  incr() {
    this.cmp.increase();
    this.counter2parent = this.cmp.childCounter;
  }
  
  decr() {
    this.cmp.decrease();
    this.counter2parent = this.cmp.childCounter;
  }

  ngOnInit(): void {
    console.log("_________NgOnInit___________________", this.element1);
  }
  ngAfterViewInit(): void {
    console.log("__________NgAfterViewInit______", this.element1);
    // focus the element1 at the time of loading
    this.element1.nativeElement.focus();
    // auto-select one gender radio button
    this.elementList.first.nativeElement.checked = true;
  }

}
