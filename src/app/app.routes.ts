import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {HomeComponent} from './home/home.component'
import { BlogPageComponent } from './blog-page/blog-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {path:'admin', component: AdminComponent},
  {path:'home', component: HomeComponent},
  {path:'blogPage', component: BlogPageComponent},
  // Redirect empty path to '/home'
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Wildcard for 404 - Page Not Found
  { path: '**', component: PageNotFoundComponent }
];
