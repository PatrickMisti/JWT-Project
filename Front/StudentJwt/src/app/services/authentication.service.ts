import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserLogin} from '../model/user.model';
import {Router} from '@angular/router';

export const url = 'http://localhost:53127/api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  invalidLogin: boolean;

  constructor(private http: HttpClient, private router: Router) { }

  login(user: UserLogin): void {
    const credentials = JSON.stringify(user);
    this.http.post(url + '/auth/login', credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      const token = ( response as any).token;
      localStorage.setItem('jwt', token);
      this.invalidLogin = false;
      this.router.navigate(['overview']);
    }, error => {
      this.invalidLogin = true;
    });
  }

  loginHomeLocal(): void {
    this.router.navigate(['overview']);
  }

  logOut(): void {
    localStorage.removeItem('jwt');
  }
}
