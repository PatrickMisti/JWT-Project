import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeLoginComponent} from './home-login/home-login.component';
import {OverviewComponent} from './overview/overview.component';
import {AuthGuard} from './services/AuthGuard';
import {SettingsComponent} from './components/settings/settings.component';

const routes: Routes = [
  {path: '', component: HomeLoginComponent},
  // {path: 'overview', component: OverviewComponent/*, canActivate: [AuthGuard]*/}
  {path: 'overview', component: OverviewComponent
    , loadChildren: () => import('./overview/overview-routing').then(m => m.OverviewRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
