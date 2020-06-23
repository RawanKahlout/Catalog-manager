import { Component, OnInit, Inject } from '@angular/core';
import { productService } from '../../product.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dataService } from '../../data.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  queryData = {
  };
  brandOptitons;typeOptions;sizeOptions;tempp;requestSource;
  constructor(public _dialogRef: MatDialogRef<FilterComponent>, private _productService: productService, private _dataService: dataService,
  @Inject(MAT_DIALOG_DATA) public data: any) { this.requestSource = data; }
  ngOnInit() {
    this.getAttribute();    
  }
  submiskutData(form: NgForm) {
    this.prepareData(form);
    //this._productService.skusFilter(this.queryData).subscribe(res => {
      this.onClose(this.queryData)
   //});
  }
  submitArticleData(form: NgForm) {
    this.prepareData(form)
   // this._productService.filter(this.queryData).subscribe(res => {
      this.onClose(this.queryData)
   // });
  }
  reset(form: NgForm) {
    form.reset();
  }
  onClose(res) {
    this._dialogRef.close(res);
  }
  prepareData(form: NgForm) {
    for (var key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        var val = form.value[key];
        if (val == true) {
          switch (key) {
            case "statusId" :{
              this.queryData[key]="enabled";
              break;
            }
            case "stockStatusId" :{
              this.queryData[key]=1;
              break;
            }
            case "hasImage" :{
              this.queryData[key]="";
              break;
            }
            case "hasArabicDescription":{
              this.queryData[key]="arabicDescription";
              break;
            }
            case "hasEnglishDescription":{
              this.queryData[key]="englishDescription";
              break;
            }
        }
        }
        if (key == "price" ){
        this.queryData[key] = (form.value.fromP+val);
        }
        if(key=="quantity"){
        this.queryData[key] = (form.value.fromQ+val);
        }
        if (val && val != true && key != "quantity" && key != "price" && key != "fromP" && key != "fromQ") {
          this.queryData[key] = val;
        }
      }
    }
    console.log(this.queryData,"her uam")
  }
  getAttribute(){
    this._dataService.getAttribute(83).subscribe( data => { this.tempp = data; this.brandOptitons=this.tempp.data;
    })
    this._dataService.getAttribute(178).subscribe(data=>{this.tempp = data; this.typeOptions = this.tempp.data;})
    this._dataService.getAttribute(169).subscribe(data=>{this.tempp = data; this.sizeOptions = this.tempp.data;})
  }
}

