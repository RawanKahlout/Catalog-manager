import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { productService } from '../product.service';
import{dataService} from '../data.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { NgForm } from '@angular/forms';
import { WarningComponent } from '../popup/warning/warning.component';
import { ShowImageComponent } from '../popup/show-image/show-image.component';
import { SuccessComponent } from '../popup/success/success.component';
import{ChangeArticleComponent}from '../ProductActions/change-article/change-article.component';
import{ChangeSizeComponent}from '../ProductActions/change-size/change-size.component';
import { FilterComponent } from '../popup/filter/filter.component';
import {Subject}from 'rxjs';


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
  selector: 'app-all-skus',
  templateUrl: './all-skus.component.html',
  styleUrls: ['./all-skus.component.css']
})
export class AllSkusComponent implements OnInit{
  initData = [{ position: 1, name: 'air max', article: 'e1022a013-009', price: 200, gender: 'men', specialprice: 100, image: '1.jpg' }]
  result;
  displayedColumns: string[] = ['select', 'position', 'name', 'article', 'price', 'gender', 'specialprice', 'image'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  subject = new Subject();
  isLoading = false;
  @ViewChild(MatPaginator, { static: false }) set Paginatorcontent(paginator: MatPaginator) {
    this.dataSource.paginator = paginator
  }
  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  constructor(private _productService: productService,private _dataService:dataService,private _dialog: MatDialog) { }

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
  openDialog(DialogBodyComponent, data, actionName) {
    if (this.checkRows(actionName) != true) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = data;
      dialogConfig.width = "60%";
      dialogConfig.height="60%"
      dialogConfig.panelClass = "myapp-no-padding-dialog"
      let dialogRef = this._dialog.open(DialogBodyComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.updateTableValues(data, actionName)
        }
      });
    }
  }
  checkRows(actionName) {
  if (this.selection.selected.length == 0) {
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
  onSearch(form: NgForm) {
    var ArrayOfArticles = form.value.search.split(/\s/).join(',');
    this._productService.searchForAllSkus(ArrayOfArticles).subscribe(data => {
      this.isLoading = true;
      this.result = data;
      this.dataSource.data = this.result.data;
      this.isLoading = false;
    });
  }
  onImage(element) {
    this._dialog.open(ShowImageComponent, {
      width: "60%",
      data: element.imageUrl,
      panelClass:"myapp-no-padding-dialog"
    })
  }
  changeSize(){
    this.openDialog(ChangeSizeComponent, this.selection.selected,"changeSize")
  }
  changeArticle(){
    this.openDialog(ChangeArticleComponent, this.selection.selected,"changeArticle")
  }
  filter(){
    let data,count;
    let dialogRef =  this._dialog.open(FilterComponent,
    {
      panelClass: 'myapp-filter-dialog',
      width : "45%",
      height:"95%",
      data: "skus"
    })
    dialogRef.afterClosed().subscribe(result=>{
      if (result){
        this.isLoading = true;
        console.log(result)
        this._productService.skusFilter(result).subscribe(res => {
          this.result = res
          console.log(res)
          this.dataSource.data= this.result.data;
          this.isLoading = false;
        })
      }
    })
  }
  enable(){ this.openDialog(SuccessComponent, this.selection.selected,"enableProduct")}
  disable(){
  this.openDialog(SuccessComponent, this.selection.selected,"disableProduct")
  this._productService.disableProduct(this.selection.selected);}
  download(){
    this._dataService.downloadFile(this.result.data,"SKUs")
  }
}
