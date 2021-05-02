import { TemplateRef } from '@angular/core';

export type TemplateDefinition<Template extends TemplateRef<unknown> = TemplateRef<unknown>> = {
  customTemplate?: Template;
  defaultTemplate: Template;
};
