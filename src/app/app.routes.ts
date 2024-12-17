import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'emails',
    loadComponent: () =>
      import('./email/pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'emails',
    pathMatch: 'full',
  },
];
