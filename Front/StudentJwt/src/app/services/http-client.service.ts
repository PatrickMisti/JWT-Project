import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {url} from './authentication.service';
import {JsonFormatter} from 'tslint/lib/formatters';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  readonly studentUrl = '/students';
  readonly teacherUrl = '/teachers';

  constructor(private client: HttpClient) { }

  user = [];

  async getData(): Promise<void> {
    await fetch(url + this.studentUrl)
      .then(response => response.json())
      .then(res => this.user.push(res))
      .catch(err => console.log(err));
  }

  async postData(grad: string, obj: object): Promise<void> {
    console.log('post');
    const userJson = this.createUser(obj);
    console.log(JSON.stringify(userJson));
    // let s = url+this.studentUrl;
    await fetch('http://localhost:53127/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userJson)
    }).then(data => console.log(data.json()));
  }
/*{
    "Id":0,
    "UserName":"Plexis12",
    "Password":"Patrick",
    "RefreshToken":null,
    "RefreshTokenExpireyTime": "0001-01-01T00:00:00" ,
    "Role":"User",
    "Name":"Patrick",
    "Age":21
}*/
  createUser(obj: object): object {
    return {
      Id: 0,
      UserName: obj['username'],
      Password: obj['password'],
      RefreshToken: null,
      RefreshTokenExpireyTime:  "0001-01-01T00:00:00",
      Role: 'User',
      Name: obj['name'],
      Age: obj['age']
    };
  }

  createTest() {
    return {
      Name: 'Test',
      Age: 12
    };
  }
}
