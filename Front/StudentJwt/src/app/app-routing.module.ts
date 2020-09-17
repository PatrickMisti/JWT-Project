import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeLoginComponent} from './home-login/home-login.component';
import {OverviewComponent} from './overview/overview.component';

const routes: Routes = [
  {path: '', component: HomeLoginComponent},
  {path: 'overview', component: OverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
