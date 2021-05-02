import { TemplateRef } from '@angular/core';

export type TemplateTypes = 'header' | 'footer';

export type RenderTemplates = Record<TemplateTypes, TemplateRef<{}>>;
