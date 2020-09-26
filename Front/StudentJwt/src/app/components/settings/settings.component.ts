import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClientService} from '../../services/http-client.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  hide = true;
  formGroup: FormGroup;
  grads = [['Schüler', 'students'], ['Lehrer', 'teacher']];
  constructor(private https: HttpClientService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  async postData(grad: string): Promise<void> {
    // todo disable button to submit
    await this.https.postData(grad, this.formGroup);
  }
}
