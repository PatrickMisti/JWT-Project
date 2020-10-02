import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeLoginComponent } from './home-login/home-login.component';
import { OverviewComponent } from './overview/overview.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtModule} from '@auth0/angular-jwt';
import {AuthGuard} from './services/AuthGuard';
import {HttpClientService} from './services/http-client.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { SettingsComponent } from './components/settings/settings.component';
import {MatTabsModule} from '@angular/material/tabs';
import {OverviewRoutingModule} from './overview/overview-routing';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { ClassListComponent } from './components/class-list/class-list.component';
import {A11yModule} from '@angular/cdk/a11y';
import { DialogPopupFinishComponent } from './components/settings/dialog-popup-finish/dialog-popup-finish.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

export function tokenGetter(): string {
  return localStorage.getItem('jwt');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    OverviewComponent,
    SettingsComponent,
    StudentsListComponent,
    TeachersListComponent,
    ClassListComponent,
    DialogPopupFinishComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OverviewRoutingModule,
        JwtModule.forRoot({
            config: {
                tokenGetter,
                allowedDomains: ['localhost:53127'],
                disallowedRoutes: []
            }
        }),
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonToggleModule,
        MatButtonModule,
        HttpClientModule,
        FormsModule,
        MatSidenavModule,
        MatDividerModule,
        MatTabsModule,
        ReactiveFormsModule,
        A11yModule,
        MatDialogModule,
        MatTableModule
    ],
  providers: [AuthGuard, HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
