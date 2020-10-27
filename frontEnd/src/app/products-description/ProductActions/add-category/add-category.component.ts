import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { productService } from '../../product.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {
  rowData;
  addPrice
  constructor(public _dialogRef: MatDialogRef<AddCategoryComponent>, private _productService: productService,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.rowData = data; }
  ngOnInit() { }

  submitData(form: NgForm) {
    this._productService.updateCategory(form.value.selectCategory, this.rowData);
    this.onClose();
  }
  callPrice(){
    this.addPrice = 1;
  }
  onClose() {
    this._dialogRef.close();
  }
}
