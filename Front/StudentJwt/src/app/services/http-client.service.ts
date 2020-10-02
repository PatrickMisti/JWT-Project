import { Injectable } from '@angular/core';
import {url} from './authentication.service';
import {FormGroup} from '@angular/forms';
import {tokenGetter} from '../app.module';

export const studentUrl = '/students';
export const teacherUrl = '/teachers';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {



  constructor() { }

  data = [];

  async getData(urlPath: string): Promise<void> {
    await fetch(url + urlPath)
      .then(response => response.json())
      .then(res => this.data.push(res))
      .catch(err => console.log(err));
  }

  async postData(grad: string, form: FormGroup): Promise<void> {
    const userJson = this.createUser(form);
    const baseUrl = grad === 'students' ? studentUrl : teacherUrl;
    await fetch(url + baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      },
      body: JSON.stringify(userJson)
    }).then(res => res.status === 401 ? console.log(res.statusText) : null);
  }

  createUser(obj: FormGroup): object {
    return {
      Id: 0,
      UserName: obj.value.username,
      Password: obj.value.password,
      RefreshToken: null,
      RefreshTokenExpireyTime:  '0001-01-01T00:00:00',
      Role: 'User',
      Name: obj.value.name,
      Age: obj.value.age
    };
  }
}
