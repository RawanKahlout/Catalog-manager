import { Component, OnInit } from '@angular/core';
import{productService}from '../../product.service';
import { MatDialogRef } from '@angular/material/dialog';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  temp:any;
  queryData ={
  };
  constructor(public _dialogRef: MatDialogRef<FilterComponent>, private _productService: productService){}
  submitData(form: NgForm) {
    for (var key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        var val = form.value[key];
        if (val) {
          this.queryData[key] = val;
        }
      }
    }
    this._productService.filter(this.queryData);
    this._dialogRef.close();
  }
  reset(form : NgForm){
    form.reset();
  }
  ngOnInit() {
  }

}
