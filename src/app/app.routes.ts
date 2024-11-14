import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('../process/auth/auth.module').then((m) => m.AuthModule),
  },
];
