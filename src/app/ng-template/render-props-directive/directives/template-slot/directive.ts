import { Directive, Input, TemplateRef } from '@angular/core';
import { SlotName } from 'src/app/ng-template/shared/model';

@Directive({
  selector: '[appTemplateSlot]'
})
export class TemplateSlotDirective {
  @Input() appTemplateSlot: SlotName | null = null;

  constructor(public template: TemplateRef<unknown>) {}
}
