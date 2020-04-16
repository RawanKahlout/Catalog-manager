import { Component, OnInit, Inject } from '@angular/core';
import { productService } from '../product.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-discount-persentage',
  templateUrl: './add-discount-persentage.component.html',
  styleUrls: ['./add-discount-persentage.component.css']
})
export class AddDiscountPersentageComponent implements OnInit {
  rowData
  addCategory
  constructor(private _productService: productService,
    public _dialogRef: MatDialogRef<AddDiscountPersentageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.rowData = data; }
  ngOnInit() {
  }

  submitData(form: NgForm) {
    this._productService.addDiscountPersentage(form.value.price,form.value.selectCategory, this.rowData);
    this.onClose();
  }
  onClose() {
    this._dialogRef.close();
  }
  callCategory(){
    this.addCategory = 1;
   }
}
