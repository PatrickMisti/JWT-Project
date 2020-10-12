import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeLoginComponent} from './home-login/home-login.component';
import {OverviewComponent} from './overview/overview.component';
import {AuthGuard} from './services/AuthGuard';

const routes: Routes = [
  {path: '', component: HomeLoginComponent, pathMatch: 'full'},
  // {path: 'overview', component: OverviewComponent/*, canActivate: [AuthGuard]*/}
  {path: 'overview', component: OverviewComponent, canActivate: [AuthGuard]
    , loadChildren: () => import('./overview/overview-routing').then(m => m.OverviewRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
