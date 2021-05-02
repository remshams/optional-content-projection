import { TemplateRef } from '@angular/core';

export type TemplateTypes = 'header' | 'footer';

export type Templates = Record<TemplateTypes, TemplateRef<{}>>;

export type TemplateDefinition<Template extends TemplateRef<unknown> = TemplateRef<unknown>> = {
  customTemplate?: Template;
  defaultTemplate: Template;
};
