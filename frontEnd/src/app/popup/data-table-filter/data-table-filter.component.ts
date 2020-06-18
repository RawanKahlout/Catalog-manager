import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { dataService } from '../../data.service';
@Component({
  selector: 'app-data-table-filter',
  templateUrl: './data-table-filter.component.html',
  styleUrls: ['./data-table-filter.component.css']
})
export class DataTableFilterComponent implements OnInit {
  queryData = {
  };
  requestSource;
  sizeOptions;
  tempp;
  brandOptions;
  typeOptions;
  constructor(public _dialogRef: MatDialogRef<DataTableFilterComponent>, private _dataService: dataService,
    @Inject(MAT_DIALOG_DATA) public data: any, private _dialog: MatDialog) { this.requestSource = data; }
  ngOnInit() {
    this.getAttribute();
  }
  submitData(form: NgForm) {
    this.prepareData(form);
    this.onClose(this.queryData)
  }
  onClose(queryData) {
    this._dialogRef.close(queryData)
  }
  prepareData(form: NgForm) {
    this.queryData["flag"]=1;
    for (var key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        var val = form.value[key];
        if (val == true) {
          this.queryData[key] = 1;
        }
        if (val && val != true) {
          this.queryData[key] = val;
        }
      }
    }
  }
  getAttribute() {
    this._dataService.getAttribute(83).subscribe(data => {
      this.tempp = data; this.brandOptions = this.tempp.data;
    })
    this._dataService.getAttribute(178).subscribe(data => { this.tempp = data; this.typeOptions = this.tempp.data; })
    this._dataService.getAttribute(169).subscribe(data => { this.tempp = data; this.sizeOptions = this.tempp.data; })
  }
  reset(form: NgForm) {
    form.reset();
  }
}
