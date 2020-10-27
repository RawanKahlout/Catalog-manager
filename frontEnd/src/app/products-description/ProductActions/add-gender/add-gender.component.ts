import { Component, OnInit } from '@angular/core';
import { productService } from '../../product.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-gender',
  templateUrl: './add-gender.component.html',
  styleUrls: ['./add-gender.component.css']
})
export class AddGenderComponent implements OnInit {
  rowData
  addCategory;
  constructor(private _productService: productService,
    public _dialogRef: MatDialogRef<AddGenderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.rowData = data; }
  ngOnInit() {
  }
  submitData(form: NgForm) {
    this._productService.updateGender(form.value.selectGender,this.rowData);
    this.onClose();
  }
  onClose() {
    this._dialogRef.close();
  }
  callCategory(){
   this.addCategory = 1;
  }
}
