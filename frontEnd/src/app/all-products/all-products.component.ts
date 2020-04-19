import { Component, OnInit, ViewChild } from '@angular/core';
import { productService } from '../product.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { SelectionModel ,DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddCategoryComponent } from '../ProductActions/add-category/add-category.component';
import { AddGenderComponent } from '../ProductActions/add-gender/add-gender.component';
import { AddDescriptionComponent } from '../ProductActions/add-description/add-description.component';
import { AddPriceComponent } from '../ProductActions/add-price/add-price.component';
import { DiscountPriceComponent } from '../ProductActions/discount-price/discount-price.component';
import { JsonMapperPipe } from '../pipe/json-mapper.pipe';
import { NgForm } from '@angular/forms';
import { ProductStatusComponent } from '../ProductActions/product-status/product-status.component';
import { WarningComponent } from '../popup/warning/warning.component';
import { ShowImageComponent } from '../popup/show-image/show-image.component';
import{SuccessComponent}from '../popup/success/success.component';
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
const ELEMENT_DATA: tableCol[]=[]
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  initData =[{ position: 1, name: 'air max', article: 'e1022a013-009', price:200 ,gender:'men',specialprice:100 ,image:'1.jpg'}]
  result;
  displayedColumns: string[] = [ 'select','position', 'name', 'article', 'price', 'gender', 'specialprice', 'image'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  @ViewChild(MatPaginator, { static: false }) set Paginatorcontent (paginator:MatPaginator){
    this.dataSource.paginator = paginator
  }
  @ViewChild(MatSort ,{static: false}) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }
 
  constructor(private _productService: productService, private _dialog: MatDialog) { }
  ngOnInit() {
    this.dataSource.filterPredicate= (data:tableCol ,filter: string): boolean=>{
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
    if (this.checkRows("") != true) {
    this._dialog.open(AddPriceComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected
      }
    })
  }
  }

  addDescription() {
    if (this.checkRows("Description") != true) {
    this._dialog.open(AddDescriptionComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected
      }
    });
  }
  }

  enableProduct() { 
    if (this.checkRows("") != true) {
    this._dialog.open(SuccessComponent);
    this._productService.enableProduct(this.selection.selected);
   
    }
  }

  disableProduct() {
    if (this.checkRows("") != true) {
    this._dialog.open(SuccessComponent);
    this._productService.disableProduct(this.selection.selected);
  }
}

  addGender() {
    if (this.checkRows("") != true) {
    this._dialog.open(AddGenderComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected
      }
    })
  }
  }
  addDiscountPrice() {
    if (this.checkRows("") != true) {
    this._dialog.open(AddDiscountPersentageComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected
      }
    })
  }
  }
  addDiscount() {
    if (this.checkRows("") != true) {
    this._dialog.open(DiscountPriceComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected
      }
    })
  }
  }
  changeStatus() {
    if (this.checkRows("") != true) {
    this._dialog.open(ProductStatusComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected
      }
    })
  }
  }
  addCategory() {

    if (this.checkRows("") != true) {
      this._dialog.open(AddCategoryComponent, {
        width: "60%",
        data: {
          dataKey: this.selection.selected
        }
      });
    }
  }
  checkRows(actionName) {
    if (actionName == 'Description' && this.selection.selected.length > 1 ){
        if (this.selection.selected.length > 1){
        this._dialog.open(WarningComponent,{
          width: "60%",
          data :{
            message: 'Select only one product'
          }
        });
        return true
      }
    }
    else if (this.selection.selected.length == 0) {
      this._dialog.open(WarningComponent,{
        width: "60%",
        data:{
          message:"You have to select a product before any operation"
        }
      });
      return true
    }
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

}

