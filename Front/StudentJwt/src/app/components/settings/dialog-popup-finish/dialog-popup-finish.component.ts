import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-popup-finish',
  templateUrl: './dialog-popup-finish.component.html',
  styleUrls: ['./dialog-popup-finish.component.css']
})
export class DialogPopupFinishComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogPopupFinishComponent>, @Inject(MAT_DIALOG_DATA) public data: object) { }

  ngOnInit(): void {
  }
}
