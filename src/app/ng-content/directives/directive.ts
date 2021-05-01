import { Directive } from '@angular/core';

@Directive({
  selector: '[appSlot]'
})
export class SlotDirective {
  constructor() {}
}
