import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(public _dialogRef: MatDialogRef<SuccessComponent>) { }

  ngOnInit() {
  }

onClose() {
 this._dialogRef.close();
}

}