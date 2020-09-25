import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {SettingsComponent} from '../components/settings/settings.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @ViewChild('drawer') drawer;
  uname: string;
  pword: string;
  iconSwitch = false;
  menuList = [['KlassenListe', 'classList']
    , ['SchülerListe', 'studentsList']
    , ['LehrerListe', 'teachersList']
    , ['Einstellungen', 'settings']];

  constructor(private jwtHelper: JwtHelperService, private arouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.uname = this.arouter.snapshot.paramMap.get('ulogin');
  }

  callComponent(component): void {
    this.drawer.toggle();
    this.router.navigate(['overview/' + component]);

  }

  isUserAuthenticated(): boolean {
    const token: string = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  public logOut = () => {
    localStorage.removeItem('key');
  }

}
