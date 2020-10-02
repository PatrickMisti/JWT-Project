import { Component, OnInit } from '@angular/core';

export interface ClassRoom{
  classId: number;
  className: string;
  students: [];
  teachers: [];
}

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  classRoom: ClassRoom[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
