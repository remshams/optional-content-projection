import { NgIfContext } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SlotDirective } from '../../directives/directive';

@Component({
  selector: 'app-slot-with-default',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlotWithDefaultComponent implements OnInit {
  @ContentChildren(SlotDirective, { descendants: true }) set slotDirective(slotDirective: QueryList<SlotDirective>) {
    this.isSlotSet.next(slotDirective.length === 1);
  }

  @Input() defaultSlotContent: TemplateRef<NgIfContext> | null = null;

  private isSlotSet: BehaviorSubject<boolean>;
  readonly isSlotSet$: Observable<boolean>;

  constructor() {
    this.isSlotSet = new BehaviorSubject<boolean>(false);

    this.isSlotSet$ = this.isSlotSet.asObservable();
  }

  ngOnInit(): void {}
}
