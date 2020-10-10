import { Component, OnInit } from '@angular/core';
import {classRoomUrl, HttpClientService} from '../../services/http-client.service';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

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
  classRoomName = ['position', 'classn', 'delete'];
  classRoom: ClassRoom[] = [];
  datasource: MatTableDataSource<ClassRoom>;
  role: string = null;

  constructor(private http: HttpClientService, private arouter: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('class list');
    this.http.getData(classRoomUrl).then(data => {
      this.datasource = new MatTableDataSource<ClassRoom>(data);
    });
    this.arouter.params.subscribe(data => {
      this.role = data.roles;
    });
  }

  deleteRow(row): void {
    this.classRoom.push(row);
    const index = this.datasource.data.indexOf(row);
    this.datasource.data.splice(index, 1);
    this.datasource.data = this.datasource.data;
  }

  saveData(): void {
    // ToDo http server send data classroomid
    console.log(this.classRoom);
  }
}
