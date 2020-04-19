import { Component, OnInit } from '@angular/core';
import { productService } from '../../product.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-status',
  templateUrl: './product-status.component.html',
  styleUrls: ['./product-status.component.css']
})
export class ProductStatusComponent implements OnInit {
  rowData
  constructor(private _productService: productService,
  public _dialogRef: MatDialogRef<ProductStatusComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { this.rowData = data; }
  ngOnInit() {
  }
  submitData(form: NgForm) {
    this._productService.changeStatus(form.value.selectstatus,this.rowData);
    this.onClose();
  }
  onClose() {
    this._dialogRef.close();
  }
}
