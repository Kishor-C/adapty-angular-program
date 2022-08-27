import { Directive, ElementRef, HostListener } from "@angular/core";


@Directive({
    selector: "simple-directive"
})
export class SimpleDirective {
   
    // this line creates an ElementRef object that refers to the DOM element
    constructor(private ele : ElementRef) {
    }
    @HostListener('mouseover')
    highlight() {
        this.ele.nativeElement.style.color = 'red';
    }
}
