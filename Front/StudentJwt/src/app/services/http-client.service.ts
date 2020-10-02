import { Injectable } from '@angular/core';
import {url} from './authentication.service';
import {FormGroup} from '@angular/forms';
import {tokenGetter} from '../app.module';
import {Observable, Observer} from 'rxjs';
import {ClassRoom} from '../components/class-list/class-list.component';

export const studentUrl = '/students';
export const teacherUrl = '/teachers';
export const classRoomUrl = '/classroom';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {



  constructor() { }

  private data = [];

  async getData(urlPath: string): Promise<any> {
    return await fetch(url + urlPath)
      .then(res => res.json());
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
