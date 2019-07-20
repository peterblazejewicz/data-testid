import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[testId]'
})
export class TestIdDirective {
  @HostBinding('attr.data-qa-id') @Input() testId: string;
}
