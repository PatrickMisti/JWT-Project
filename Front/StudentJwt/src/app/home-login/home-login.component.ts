import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserLogin} from '../model/user.model';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  username: string = null;
  password: string = null;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginHome(): void {
    const user = new UserLogin(this.username, this.password);
    console.log(user);
    this.router.navigate(['overview', {ulogin: 'user.toString()'}]);
  }
}
