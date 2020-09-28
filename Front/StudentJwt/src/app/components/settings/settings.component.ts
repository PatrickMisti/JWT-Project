import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClientService} from '../../services/http-client.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogPopupFinishComponent} from './dialog-popup-finish/dialog-popup-finish.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  hide = true;
  formGroup: FormGroup;
  grads = [['Schüler', 'students'], ['Lehrer', 'teacher']];
  constructor(private https: HttpClientService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.formGroup = this.formGroupSetUp();
  }

  async postData(grad: string): Promise<void> {
    // todo disable button to submit
    await this.https.postData(grad, this.formGroup);
    console.log(this.formGroup.value.username);
    this.dialog.open(DialogPopupFinishComponent, {
      data: {name: this.formGroup.value.username}
    });
    this.formGroup = this.formGroupSetUp();
  }

  formGroupSetUp(): FormGroup {
    return new FormGroup({
      username: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }
}
