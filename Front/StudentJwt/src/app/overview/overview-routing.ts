import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewComponent} from './overview.component';
import {SettingsComponent} from '../components/settings/settings.component';
import {ClassListComponent} from '../components/class-list/class-list.component';
import {StudentsListComponent} from '../components/students-list/students-list.component';
import {TeachersListComponent} from '../components/teachers-list/teachers-list.component';

const childRouter: Routes = [
  {path: '' , children: [
      {path: 'classList', component: ClassListComponent},
      {path: 'studentsList', component: StudentsListComponent},
      {path: 'teachersList', component: TeachersListComponent},
      {path: 'settings', component: SettingsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(childRouter)],
  exports: [RouterModule]
})
export class OverviewRoutingModule {
}
