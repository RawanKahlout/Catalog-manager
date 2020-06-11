import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { productService } from 'src/app/product.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ProductStatusComponent } from '../product-status/product-status.component';
import { NgForm } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-show-skus',
  templateUrl: './show-skus.component.html',
  styleUrls: ['./show-skus.component.css']
})
export class ShowSkusComponent implements OnInit {
  displayedColumns: string[] = [ 'position', 'parentSku', 'sku', 'size', 'price', 'salePrice','discountPercentage'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  @ViewChild(MatPaginator, { static: false }) set Paginatorcontent(paginator: MatPaginator) {
    this.dataSource.paginator = paginator
  }
  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  rowData;
  searchedValue;
  skus;
  constructor(private _productService: productService,
  public _dialogRef: MatDialogRef<ProductStatusComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { this.rowData = data; }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  ngOnInit() {
    console.log(this.rowData)
    this.rowData.forEach(element => {
      if (this.searchedValue == undefined) {
      this.searchedValue = element['sku']
      }
      else {
        this.searchedValue += ","
        this.searchedValue += element['sku'];
      }
    });
    this._productService.searchForAllSkus(this.searchedValue).subscribe(
      data=>{
       this.skus = data;
       this.dataSource.data= this.skus.data
      })
    };
  
  onClose() {
    this._dialogRef.close();
  }
}
