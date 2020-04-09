import { Component, OnInit } from '@angular/core';
import { productService } from '../product.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-discount-price',
  templateUrl: './discount-price.component.html',
  styleUrls: ['./discount-price.component.css']
})
export class DiscountPriceComponent implements OnInit {

  rowData
  constructor(private _productService: productService,
    public _dialogRef: MatDialogRef<DiscountPriceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.rowData = data; }
  ngOnInit() {
  }

  submitData(form: NgForm) {
    this._productService.addDiscountPrice(form.value.price, this.rowData);
    this.onClose();
  }
  onClose() {
    this._dialogRef.close();
  }

}
