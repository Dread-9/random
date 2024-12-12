import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'image-list',
    loadComponent: () => import('./shared/components/image-list/image-list.page').then( m => m.ImageListPage)
  },
  {
    path: 'image-detail/:id',
    loadComponent: () => import('./shared/components/image-detail/image-detail.page').then( m => m.ImageDetailPage)
  },
  {
    path: 'upload-image',
    loadComponent: () => import('./shared/components/upload-image/upload-image.page').then( m => m.UploadImagePage)
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'view-image',
    loadComponent: () => import('./pages/view-image/view-image.page').then( m => m.ViewImagePage)
  },
];
