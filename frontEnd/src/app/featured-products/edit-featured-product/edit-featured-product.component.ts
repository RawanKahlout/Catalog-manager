import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { CdkTableModule } from "@angular/cdk/table";
import { productService } from '../../product.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ShowImageComponent } from '../../popup/show-image/show-image.component';
import { Params, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import { WarningComponent } from '../../popup/warning/warning.component';
import { SuccessComponent } from '../../popup/success/success.component';
import { dataService } from '../../data.service';
export interface tableCol {
  ParentSky: string;
  specialprice: number;
  position: string;
  article: string;
  entityId: number;
  createdAt: string;
  updatedAt: number;
  name: string;
  sku: number;
  productType: string;
  price: number;
  specialPrice: number;
  discountPercentage: number;
  quantity: number;
  categoriesId: number;
  categories: number;
  imageUrl: string;
  brand: string;
  brandId: number;
  gender: string;
  genderId: number;
  type: string;
  typeId: number;
  description: string;
  stockStatusId: number;
  stockStatus: string;
  status: number;
  statusId: number;
  visibility: string;
  visiblityId: number;
}

@Component({
  selector: 'app-edit-featured-product',
  templateUrl: './edit-featured-product.component.html',
  styleUrls: ['./edit-featured-product.component.css']
})
export class EditFeaturedProductComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selection = new SelectionModel(true, []);
  dataSource = new MatTableDataSource();
  displayedColumns; result; count; columns;
  routerParams: Params;
  constructor(private _changeDetectorRef: ChangeDetectorRef, private _productService: productService, private _dialog: MatDialog, private _router: Router,
    private _dataService: dataService, private _ActivatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
  this.columns = this._productService.columns;
  this.displayedColumns = this._productService.editeFeaturedHeader;
  this._productService.getDaynamic("featured").subscribe(
    data => {
      this._productService.getDaynamic("featured").subscribe(
      data => {
        this.result = data;
        this.count = this.result.count;
          if (this.count == 0) {
          const text = document.getElementById('content');
          text.innerHTML += "<p style='padding-top:100px;font-size:30px;text-align:center;font-weight:bolder;class=centerThing'>No product here !</p>"
          return
          }
          this.dataSource.data = this.result.data;
          },
          error => {console.log("ERROR", error)}
        )
      });
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
  this.dataSource.filterPredicate = (data: tableCol, filter: string): boolean => {
      const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
        return (currentTerm + (data as { [key: string]: any })[key]);
      }, '').toLowerCase();
      let terms = filter.replace(/\s/g, "|");
      let regEx = new RegExp(terms);

      return regEx.test(dataStr);
    }
  }
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
  checkboxLabel(row?: tableCol): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  applyFilter(event: String) {
    const filterValue = event
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteFeatured(row) {
    this.deleteRow(row);
  }
  onImage(row) {
   this._productService.onImage(row) 
  }
  deleteRow(row) {
    var data = this.dataSource.data;
    data.splice(data.indexOf(row), 1);
    console.log(data.indexOf(row));
    this.dataSource.data = data;
    //this._changeDetectorRef.detectChanges();
    this._productService.deleteOneFeaturedProduct(row);
  }
  download() {
    this._dataService.downloadFile(this.result.data, "Featured Product");
  }
}
