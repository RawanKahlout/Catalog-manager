import { Component, OnInit, ViewChild } from '@angular/core';
import { productService } from '../product.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddCategoryComponent } from '../ProductActions/add-category/add-category.component';
import { AddGenderComponent } from '../ProductActions/add-gender/add-gender.component';
import { AddDescriptionComponent } from '../ProductActions/add-description/add-description.component';
import { AddPriceComponent } from '../ProductActions/add-price/add-price.component';
import { DiscountPriceComponent } from '../ProductActions/discount-price/discount-price.component';
import { NgForm } from '@angular/forms';
import { ProductStatusComponent } from '../ProductActions/product-status/product-status.component';
import { WarningComponent } from '../popup/warning/warning.component';
import { ShowImageComponent } from '../popup/show-image/show-image.component';
import { SuccessComponent } from '../popup/success/success.component';
import { AddDiscountPersentageComponent } from '../ProductActions/add-discount-persentage/add-discount-persentage.component';
export interface tableCol {
  position: number;
  name: string;
  article: string;
  price: number;
  gender: string;
  specialprice: number;
  image: string;
}
const ELEMENT_DATA: tableCol[] = []
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  initData = [{ position: 1, name: 'air max', article: 'e1022a013-009', price: 200, gender: 'men', specialprice: 100, image: '1.jpg' }]
  result;
  displayedColumns: string[] = ['select', 'position', 'name', 'article', 'price', 'gender', 'specialprice', 'image'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  @ViewChild(MatPaginator, { static: false }) set Paginatorcontent(paginator: MatPaginator) {
    this.dataSource.paginator = paginator
  }
  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  constructor(private _productService: productService, private _dialog: MatDialog) { }
  ngOnInit() {
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
    const numRows = this.result.length
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.result.forEach(row => this.selection.select(row));
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
  changePrice() {
    this.openDialog(AddPriceComponent, this.selection.selected, "addPrice");
  }
  addDescription() {
    this.openDialog(AddDescriptionComponent, this.selection.selected,"addDescription")
  }
  enableProduct() {
    this.openDialog(SuccessComponent, this.selection.selected,"enableProduct")
  }
  disableProduct() {
    this.openDialog(SuccessComponent, this.selection.selected,"disableProduct")
    this._productService.disableProduct(this.selection.selected);
  }
  addGender() {
    this.openDialog(AddGenderComponent, this.selection.selected,"updateGender")
  }
  addDiscountPrice() {
   this.openDialog(AddDiscountPersentageComponent, this.selection.selected,"addDiscountPrice");
  }
  addDiscount() {
    this.openDialog(DiscountPriceComponent, this.selection.selected, "")
  }
  changeStatus() {
    this.openDialog(ProductStatusComponent, this.selection.selected,"changeStatus");
  }
  addCategory() {
    this.openDialog(AddCategoryComponent, this.selection.selected,"updateCategory")
  }
  onImage(element) {
    console.log(element.imageUrl)
    this._dialog.open(ShowImageComponent, {
      width: "60%",
      data: element.imageUrl
    })
  }
  onSearch(form: NgForm) {
    var ArrayOfArticles = form.value.search.split(/\s/);
    this.dataSource.data = this._productService.searchForAllProduct(ArrayOfArticles);
    this.result = this.dataSource.data;

  }
  openDialog(DialogBodyComponent, data, actionName) {
    if (this.checkRows(actionName) != true) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = data;
      dialogConfig.width = "60%";
      let dialogRef = this._dialog.open(DialogBodyComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.updateTableValues(data, actionName)
          console.log("yesssssssssssssssssssssssssss");
        }
      });
    }
  }
  checkRows(actionName) {
    if (actionName == 'addDescription' && this.selection.selected.length > 1) {
      if (this.selection.selected.length > 1) {
        this._dialog.open(WarningComponent, {
          width: "60%",
          data: {
            message: 'Select only one product'
          }
        });
        return true
      }
    }
    else if (this.selection.selected.length == 0) {
      this._dialog.open(WarningComponent, {
        width: "60%",
        data: {
          message: "You have to select a product before any operation"
        }
      });
      return true
    }
  }
  updateTableValues(rowData, operationType) {
    var tempDataSource = this.dataSource.data;
    rowData.forEach(rowDataElement => {
      tempDataSource.forEach((element: any) => {
        if (operationType == "updateGender" && rowDataElement.article == element.article) { }
        else if (operationType == "updateCategory" && rowDataElement.article == element.article) { }
        else if (operationType == "changeStatus" && rowDataElement.article == element.article) { }
        else if (operationType == "enableProduct" && rowDataElement.article == element.article) { }
        else if (operationType == "disableProduct" && rowDataElement.article == element.article) { }
        else if (operationType == "addPrice" && rowDataElement.article == element.article) {
          console.log("here iam");
        }
        else if (operationType == "addDiscountPrice" && rowDataElement.article == element.article) { }
        else if (operationType == "addDescription" && rowDataElement.article == element.article) { }
        else if (operationType == "updateDiscount" && rowDataElement.article == element.article) { }
        else if (operationType == "updateDiscountWithCategory" && rowDataElement.article == element.article) { }
      })
    });
  }
}

