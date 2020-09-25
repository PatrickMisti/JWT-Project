import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {url} from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private client: HttpClient) { }

  user = [];

  async getData(): Promise<void> {
    await fetch(url + '/students')
      .then(response => response.json())
      .then(res => this.user.push(res))
      .catch(err => console.log(err));
    /*.get((url + '/students'), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });*/
  }
}
