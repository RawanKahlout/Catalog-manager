import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { productService } from '../../product.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-add-description',
  templateUrl: './add-description.component.html',
  styleUrls: ['./add-description.component.css']
})
export class AddDescriptionComponent implements OnInit {
  rowData;
  constructor(public _dialogRef: MatDialogRef<AddDescriptionComponent>, private _productService: productService,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.rowData = data; }
  ngOnInit() {
  }
  submitData(form: NgForm) {
    this._productService.addDescription(form.value.english,form.value.arabic, this.rowData);
    this.onClose();
  }
  onClose() {
    this._dialogRef.close();
  }

}
