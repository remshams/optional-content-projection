import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SlotDirective } from '../../directives/directive';
import { SlotName, SlotNames } from '../../directives/model';

@Component({
  selector: 'app-render-slot',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderSlotComponent {
  @ContentChildren(SlotDirective, { read: ElementRef }) set slotDirectives(value: QueryList<ElementRef>) {
    this.nativeSlots.next(Array.from(value));
  }

  private nativeSlots: BehaviorSubject<Array<ElementRef>>;
  readonly slotNames$: Observable<SlotNames>;

  constructor() {
    this.nativeSlots = new BehaviorSubject<Array<ElementRef>>([]);

    this.slotNames$ = this.setSlotsByName(this.nativeSlots.asObservable());
  }

  isSlotSet(slotName: SlotName): Observable<boolean> {
    return this.slotNames$.pipe(map(slotNames => slotNames.includes(slotName)));
  }

  private setSlotsByName(slots$: Observable<Array<ElementRef>>): Observable<SlotNames> {
    return slots$.pipe(map(slots => slots.map(slot => slot.nativeElement.getAttribute('slot'))));
  }
}
