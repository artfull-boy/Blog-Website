import { Routes,RouterLink } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {HomeComponent} from './home/home.component'
import { BlogPageComponent } from './blog-page/blog-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NgbdNavVertical } from './admin/dashboard/sidebar/sidebar.component';


export const routes: Routes = [
  {path:'admin', component: AdminComponent},
  {path:'home', component: HomeComponent},
  {path:'blog/:name', component: BlogPageComponent},
  {path:"sidebar", component:NgbdNavVertical},
  // Redirect empty path to '/home'
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Wildcard for 404 - Page Not Found
  { path: '**', component: PageNotFoundComponent }
];
