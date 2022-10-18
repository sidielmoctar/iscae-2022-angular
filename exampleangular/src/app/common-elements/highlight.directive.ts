import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  colors = ['red', 'blue', 'green', 'yellow'];

  constructor(el: ElementRef) {
    this.changeColor(el);
  }

  changeColor(el: ElementRef) {
    setInterval(() => {
      el.nativeElement.style.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }, 1000);
  }

}
