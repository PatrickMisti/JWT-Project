import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  hide = true;
  constructor() {
    console.log('settings');
  }

  ngOnInit(): void {
  }

}
