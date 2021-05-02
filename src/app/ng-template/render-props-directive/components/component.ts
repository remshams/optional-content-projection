import { ChangeDetectionStrategy, Component, ContentChildren, QueryList } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Templates } from '../../model';
import { TemplateSlotDirective } from '../directives/template-slot/directive';

@Component({
  selector: 'app-render-props-directive',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderPropsDirectiveComponent {
  @ContentChildren(TemplateSlotDirective) set templateSlots(templateSlots: QueryList<TemplateSlotDirective>) {
    this.templateDirectives.next(templateSlots.length > 0 ? Array.from(templateSlots) : []);
  }

  private templateDirectives: ReplaySubject<Array<TemplateSlotDirective>>;
  templates$: Observable<Partial<Templates>>;

  constructor() {
    this.templateDirectives = new ReplaySubject(1);

    this.templates$ = this.setupTemplates(this.templateDirectives.asObservable());
  }

  private setupTemplates(
    templateDirectives$: Observable<Array<TemplateSlotDirective>>
  ): Observable<Partial<Templates>> {
    return templateDirectives$.pipe(
      map(templateDirectives =>
        templateDirectives.reduce(
          (partialTemplateDirectives, templateDirective) =>
            templateDirective.appTemplateSlot
              ? {
                  ...partialTemplateDirectives,
                  [templateDirective.appTemplateSlot]: templateDirective.template
                }
              : partialTemplateDirectives,
          {}
        )
      )
    );
  }
}
