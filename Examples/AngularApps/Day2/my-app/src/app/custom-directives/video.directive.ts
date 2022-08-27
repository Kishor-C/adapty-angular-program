import { Directive, ElementRef, HostListener } from "@angular/core";

// <video width controls videoControl >
@Directive({
    selector: "[videoControl]"
})
export class VideoDirective {
    constructor(private eleRef: ElementRef) {

    }
    @HostListener('mouseover')
    playVideo() {
        // play a video when mouse is over
        this.eleRef.nativeElement.play();
    }
    @HostListener('mouseout') 
    pauseVideo() {
        // pause a video when mouse is out
        this.eleRef.nativeElement.pause();
    }
}