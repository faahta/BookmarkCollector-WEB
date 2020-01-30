import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {BookmarkListComponent} from './components/bookmark-list/bookmark-list.component';
import {BookmarkUploadComponent} from './components/bookmark-upload/bookmark-upload.component';
import {NavbarComponent} from './components/navbar/navbar.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: NavbarComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'bookmarkList',
    component: BookmarkListComponent
  },
  {
    path: 'uploadBookmark',
    component: BookmarkUploadComponent
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
