import { Component, OnInit } from '@angular/core';
import {classRoomUrl, HttpClientService} from '../../services/http-client.service';

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
  classRoomName = ['position', 'classn'];
  classRoom: ClassRoom[] = [];

  constructor(private http: HttpClientService) { }

  ngOnInit(): void {
    this.http.getData(classRoomUrl).then(data => {
      this.classRoom.push(data);
      console.log(this.classRoom);
    });
  }

}
