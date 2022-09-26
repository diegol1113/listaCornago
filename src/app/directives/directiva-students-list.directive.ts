import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivaStudentsList]'
})
export class DirectivaStudentsListDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    renderer.setStyle(elementRef.nativeElement, 'background-color', '#451288');
  }
}
