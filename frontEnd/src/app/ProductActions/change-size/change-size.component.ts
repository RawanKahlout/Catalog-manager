import { Component, OnInit, Inject } from '@angular/core';
import { productService } from 'src/app/product.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChangeArticleComponent } from '../change-article/change-article.component';
import { NgForm } from '@angular/forms';
import{dataService}from '../../data.service';
@Component({
  selector: 'app-change-size',
  templateUrl: './change-size.component.html',
  styleUrls: ['./change-size.component.css']
})
export class ChangeSizeComponent implements OnInit {
  rowData;tempp;sizeOptions;
  constructor(private _productService: productService,private _dataService:dataService,
    public _dialogRef: MatDialogRef<ChangeArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.rowData = data; }
  ngOnInit() {
    this._dataService.getAttribute(169).subscribe(data => { this.tempp = data; this.sizeOptions = this.tempp.data; })
  }
  submitData(form: NgForm) {
    this._productService.get("noImages",this.data,form.value.sizeId).subscribe(
    (response)=>{
      this.onClose(1);
    }
    );
    
  }
  onClose(status) {
    this._dialogRef.close(status);
  }
}
