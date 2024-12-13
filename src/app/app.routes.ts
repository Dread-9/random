import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'list-image',
    loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'view-image/:id',
    loadComponent: () => import('./pages/view-image/view-image.page').then( m => m.ViewImagePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
