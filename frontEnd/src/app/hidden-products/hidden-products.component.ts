import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { productService } from '../product.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ShowImageComponent } from '../popup/show-image/show-image.component';
import { Params, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AddCategoryComponent } from '../ProductActions/add-category/add-category.component'
import { AddDescriptionComponent } from '../ProductActions/add-description/add-description.component';
import { AddPriceComponent } from '../ProductActions/add-price/add-price.component';
import { ProductStatusComponent } from '../ProductActions/product-status/product-status.component';
import { WarningComponent } from '../popup/warning/warning.component';
import { SuccessComponent } from '../popup/success/success.component';
import { DataTableFilterComponent } from '../popup/data-table-filter/data-table-filter.component';
import { ShowSkusComponent } from '../ProductActions/show-skus/show-skus.component';
import { dataService } from '../data.service';
import { NgForm } from '@angular/forms';
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
  selector: 'app-hidden-products',
  templateUrl: './hidden-products.component.html',
  styleUrls: ['./hidden-products.component.css']
})
export class HiddenProductsComponent implements OnInit {
  returnedValue; columns; displayedColumns; result; count; filterForm: any;
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  routerParams: Params;
  @ViewChild(MatPaginator, { static: false }) set Paginatorcontent(paginator: MatPaginator) {
    this.dataSource.paginator = paginator
  }
  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  constructor(private _MatDialogConfig: MatDialogConfig, private _ChangeDetectorRef: ChangeDetectorRef, private _productService: productService, private _dialog: MatDialog, private _router: Router, private _ActivatedRoute: ActivatedRoute,
    private _dataService: dataService) {
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this._router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }
  ngOnInit() {
    this.columns = this._productService.columns;
    this.getParams();
    this.displayedColumns = this.getTableHeader(this.routerParams);
    this.dataSource.filterPredicate = ((data, filter) => {
      const a = !filter.owner || data.owner.toLowerCase().includes(filter.owner.toLowerCase());
      const c = !filter.price || data.price === parseInt(filter.price);
      const d = !filter.genderId || data.genderId === parseInt(filter.genderId);
      const e = !filter.categoriesId || data.categoriesId === parseInt(filter.categoriesId);
      const f = !filter.typeId || data.typeId === parseInt(filter.typeId)
      const h = !filter.quantity || data.quantity === parseInt(filter.quantity)
      const g = !filter.stockStatusId || data.stockStatusId === filter.stockStatusId;
      if (filter.flag != 1) {
        console.log(filter.flag, "here iam")
        const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
          return (currentTerm + (data as { [key: string]: any })[key]);
        }, '').toLowerCase();
        let terms = filter.replace(/\s/g, "|");
        let regEx = new RegExp(terms);
        return regEx.test(dataStr);
      }
      return a && c && d && e && f && g && h;
    }) as (PeriodicElement, string) => boolean;
  }
  download() {
    this._dataService.downloadFile(this.result.data, 'Hidden Articles');
  }
  getTableData(issueName) {
    this._productService.getDaynamic(issueName).subscribe(
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
      error => {
        console.log("ERROR", error)
      }
    )
  }
  getTableHeader(tableName) {
    switch (tableName) {
      case "Disabled":
        {
          this.getTableData('disabled')
          return this._productService.Disabled;
        }
      case "NoImage": {
        this.getTableData('noImages')
        return this._productService.NoImage;
      }

      case "Outofstock": {
        this.getTableData('outOfStock');
        return this._productService.Outofstock;
      }
      case "Noprice": {
        this.getTableData('noPrice');
        return this._productService.Noprice;
      }
      case "Nocategory": {
        this.getTableData('noCategories');
        return this._productService.Nocategory;
      }
      case "Banned": {
        this.getTableData('banned');
        return this._productService.Banned;
      }
      case "Invisible": {
        this.getTableData('invisible')
        return this._productService.invisible;
      }
      case "disabledToParent": {
        this.getTableData('disabledToParent')
        return this._productService.disabledToParent;
      }
      case "outOfStockToParent": {
        this.getTableData('outOfStockToParent')
        return this._productService.outOfStockToParent;
      }
      case "noDescription": {
        this.getTableData('noDescription')
        return this._productService.noDescription;
      }
      case "differentPrice": {
        this.getTableData('differentPrice')
        return this._productService.differentPrice;
      }
      case "differentLanguages": {
        this.getTableData('noDescription')
        return this._productService.differentLanguages;
      }
      default:
        return "No data today"
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
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.dataSource.filter = filterValue;
  }
  onImage(row) {
    this._productService.onImage(row);
  }
  getParams() {
    this._ActivatedRoute.params.subscribe(params => { this.routerParams = params.issue })
  }
  changePrice() {
    if (this.checkRows() != true) {
      this.openDialog(AddPriceComponent, this.selection.selected)
    }
  }
  enableProduct() {
    if (this.checkRows() != true) {
      this.openDialog(SuccessComponent, this.selection.selected)
      this._productService.enableProduct(this.selection.selected);
    }
  }// not completely done 
  changeStatus() {
    if (this.checkRows() != true) {
      this.openDialog(ProductStatusComponent, this.selection.selected)
    }
  }
  addCategory() {
    this.openDialog(AddCategoryComponent, this.selection.selected)
  }
  addDescription() {
    this.openDialog(AddDescriptionComponent, this.selection.selected);
  }
  checkRows() {
  return this._productService.checkRows(this.routerParams, this.selection.selected.length,"NA")
  }
  openDialog(DialogBodyComponent, data) {
    if (this.checkRows() != true) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = data;
      dialogConfig.width = "60%";
      dialogConfig.height = "60%";
      dialogConfig.panelClass = "myapp-no-padding-dialog";
      let dialogRef = this._dialog.open(DialogBodyComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.deleteRow(this.selection.selected);
        }
      });
    }
  }
  deleteRow(selection) {
    var tempData = this.dataSource.data;
    selection.forEach(item => {
      let index: number = tempData.findIndex(d => d === item);
      tempData.splice(index, 1)
    });
    this.dataSource.data = tempData;
    this._ChangeDetectorRef.detectChanges();
    this.selection = new SelectionModel(true, []);
  }
  showSkus() {
    this.openDialog(ShowSkusComponent, this.selection.selected)
  }
  filter() {
    let dialogRef = this._dialog.open(DataTableFilterComponent,
      {
        panelClass: 'myapp-filter-dialog',
        width: "45%",
        height: "80%",
        data: "article"
      })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.filterForm = result
        const filter = {
          owner: this.filterForm.owner, price: this.filterForm.price, typeId: this.filterForm.typeId,
          genderId: this.filterForm.genderId, categoriesId: this.filterForm.categoriesId, quantity: this.filterForm.quantity,
          stockStatusId: this.filterForm.stockStatusId
        } as unknown as string;
        this.dataSource.filter = this.filterForm
      }
    })
  }
}



