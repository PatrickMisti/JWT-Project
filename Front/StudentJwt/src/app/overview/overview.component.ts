import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  uname: string;
  pword: string;


  constructor(private arouter: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('ngoverview');
    this.uname = this.arouter.snapshot.paramMap.get('ulogin');
  }

}
