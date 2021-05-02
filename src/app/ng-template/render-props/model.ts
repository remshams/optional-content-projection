import { TemplateRef } from '@angular/core';

export type TemplateTypes = 'header' | 'footer';

export type Templates = Record<TemplateTypes, TemplateRef<{}>>;
