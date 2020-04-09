import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  constructor(public _dialogRef: MatDialogRef<WarningComponent>) { }

  ngOnInit() {
  }
  onClose() {
   this._dialogRef.close();
  }

}
