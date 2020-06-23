import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
message;
  constructor(public _dialogRef: MatDialogRef<WarningComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { this.message = data}
  ngOnInit() {}
  onClose() {this._dialogRef.close();
  }
}
