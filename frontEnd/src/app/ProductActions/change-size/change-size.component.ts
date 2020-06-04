import { Component, OnInit, Inject } from '@angular/core';
import { productService } from 'src/app/product.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChangeArticleComponent } from '../change-article/change-article.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-size',
  templateUrl: './change-size.component.html',
  styleUrls: ['./change-size.component.css']
})
export class ChangeSizeComponent implements OnInit {
  rowData
  constructor(private _productService: productService,
    public _dialogRef: MatDialogRef<ChangeArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.rowData = data; }
  ngOnInit() {
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
