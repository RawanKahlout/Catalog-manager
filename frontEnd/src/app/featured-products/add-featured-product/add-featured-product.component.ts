import { Component, OnInit, ViewChild } from '@angular/core';
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
import { AddPriceComponent } from '../../ProductActions/add-price/add-price.component';
import { FeaturedActionsComponent } from 'src/app/ProductActions/featured-actions/featured-actions.component';

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
  selector: 'app-add-featured-product',
  templateUrl: './add-featured-product.component.html',
  styleUrls: ['./add-featured-product.component.css']
})

export class AddFeaturedProductComponent implements OnInit {
  selection = new SelectionModel(true, []);
  dataSource = new MatTableDataSource();
  routerParams: Params;
  result; columns; displayedColumns; count;
  @ViewChild(MatPaginator, { static: false }) set Paginatorcontent(paginator: MatPaginator) {
    this.dataSource.paginator = paginator
  }
  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  constructor(private _productService: productService, private _dialog: MatDialog, private _router: Router, private _ActivatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.columns = this._productService.columns;
    this.displayedColumns = this._productService.addFeaturedHeader;
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addFeatured() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      rows: this.selection.selected,
      action: "addFeatured"
    }
    dialogConfig.panelClass = "myapp-no-padding-dialog",
      dialogConfig.width = "60%";
    dialogConfig.height = "60%";
    if (this.checkRows() != true) {
      this._dialog.open(FeaturedActionsComponent, dialogConfig);
      this._productService.submitFeaturedProduct(this.selection.selected);
    }
    console.log(this.selection.selected)
  }
  checkRows() {
  return this._productService.checkRows("NA",this.selection.selected.length,"NA");
  }
  onImage(row) {
    this._productService.onImage(row);
  }
  onSearch(form: NgForm) {
    var ArrayOfArticles = form.value.search.split(/\s/).join(',');
    this._productService.searchForAllProduct(ArrayOfArticles).subscribe(data => {
      this.result = data;
      this.dataSource.data = this.result.data;
    });
  }
}