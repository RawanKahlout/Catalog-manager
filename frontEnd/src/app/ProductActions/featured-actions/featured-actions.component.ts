import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-featured-actions',
  templateUrl: './featured-actions.component.html',
  styleUrls: ['./featured-actions.component.css']
})
export class FeaturedActionsComponent implements OnInit {
  rowData
  constructor(public _dialogRef: MatDialogRef<FeaturedActionsComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { this.rowData = data; }
  ngOnInit() {
  }
  onClose(status) {
    this._dialogRef.close(status);
  }
  submitSortingData(form: NgForm ){
    
  }
}
