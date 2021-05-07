import { TemplateRef } from '@angular/core';

export type SlotName = 'header' | 'footer';

export type Templates = Record<SlotName, TemplateRef<{}>>;

export type TemplateDefinition<Template extends TemplateRef<unknown> = TemplateRef<unknown>> = {
  customTemplate?: Template;
  defaultTemplate: Template;
};
