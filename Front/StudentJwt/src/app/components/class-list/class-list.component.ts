import { Component, OnInit } from '@angular/core';
import {classRoomUrl, HttpClientService} from '../../services/http-client.service';
import {ActivatedRoute} from '@angular/router';

export interface ClassRoom{
  classroomId: number;
  className: string;
}

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  classRoomName = ['position', 'classn', ''];
  classRoom: ClassRoom[] = [];
  role: string = null;

  constructor(private http: HttpClientService, private arouter: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('class list');
    this.http.getData(classRoomUrl).then(data => {
      this.classRoom.push(data);
      console.log(this.classRoom);
    });
    this.arouter.params.subscribe(data => {
      this.role = data.roles;
    });
  }

  deleteRow() {

  }
}
