import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../model/user.model';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  username: string = null;
  password: string = null;
  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  loginHome(): void {
    const user = new UserLogin(this.username, this.password);
    console.log(user);
    this.auth.loginHomeLocal();
  }
}
