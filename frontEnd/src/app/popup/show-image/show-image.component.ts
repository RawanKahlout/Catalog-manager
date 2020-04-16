import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {
  imageUrl;
  constructor(public _dialogRef: MatDialogRef<ShowImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.imageUrl = data; }

  ngOnInit() {
  }
  onClose() {
    this._dialogRef.close();
   }
}
