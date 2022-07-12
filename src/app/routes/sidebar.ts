import { Routes } from '@angular/router';

export const PANEL_LAYOUT: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../admin/admin.module').then((m) => m.AdminModule),
  },
];