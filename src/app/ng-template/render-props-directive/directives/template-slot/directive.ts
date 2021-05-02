import { Directive, Input, TemplateRef } from '@angular/core';
import { TemplateTypes } from 'src/app/ng-template/shared/model';

@Directive({
  selector: '[appTemplateSlot]'
})
export class TemplateSlotDirective {
  @Input() appTemplateSlot: TemplateTypes | null = null;

  constructor(public template: TemplateRef<unknown>) {}
}
