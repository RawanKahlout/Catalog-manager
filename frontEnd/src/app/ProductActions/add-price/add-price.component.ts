import { Component, OnInit, EventEmitter } from '@angular/core';
import { productService } from '../../product.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from 'protractor';
@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.css']
})
export class AddPriceComponent implements OnInit {
  rowData
  constructor(private _productService: productService,
    public _dialogRef: MatDialogRef<AddPriceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.rowData = data; }
  ngOnInit() {
    console.log(this.rowData);
  }
  submitData(form: NgForm) {
    this._productService.get("noImages",this.data,form.value.price).subscribe(
    (response)=>{
      this.onClose(1);
    }
    );
    
  }
  onClose(status) {
    this._dialogRef.close(status);
  }
}
