import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { productService } from 'src/app/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-article',
  templateUrl: './change-article.component.html',
  styleUrls: ['./change-article.component.css']
})
export class ChangeArticleComponent implements OnInit {
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
