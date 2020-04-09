import { Component, OnInit, ViewChild } from '@angular/core';
import { productService } from '../product.service';
import { SelectionModel ,DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddCategoryComponent } from '../disabledProductActions/add-category/add-category.component'
import { AddGenderComponent } from '../add-gender/add-gender.component';
import { AddDescriptionComponent } from '../disabledProductActions/add-description/add-description.component';
import { AddPriceComponent } from '../add-price/add-price.component';
import { DiscountPriceComponent } from '../discount-price/discount-price.component';
import { JsonMapperPipe } from '../pipe/json-mapper.pipe';
import { NgForm } from '@angular/forms';
import { ProductStatusComponent } from '../product-status/product-status.component';
import { WarningComponent } from '../popup/warning/warning.component';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { from } from 'rxjs';

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
  selector: 'app-disabled-product',
  templateUrl: './disabled-product.component.html',
  styleUrls: ['./disabled-product.component.css']
})
export class DisabledProductComponent implements OnInit {
  initData =[{ position: 1, name: 'air max', article: 'e1022a013-009', price:200 ,gender:'men',specialprice:100 ,image:'1.jpg'}]
  result;
  displayedColumns: string[] = [ 'select','position', 'name', 'article', 'price', 'gender', 'specialprice', 'image'];
  dataSource;
  selection = new SelectionModel(true, []);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
 
  constructor(private _productService: productService, private _dialog: MatDialog) { }
  ngOnInit() {
    this.dataSource.data = new MatTableDataSource(this.initData);
    this.dataSource.filterPredicate= (data:tableCol ,filter: string): boolean=>{
      const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
        return (currentTerm + (data as { [key: string]: any })[key]);
      }, '').toLowerCase();
      let terms = filter.replace(/\s/g, "|");
    let regEx = new RegExp(terms);
    console.log(data, filter);
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
    if (this.checkRows() != true) {
    this._dialog.open(AddPriceComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected
      }
    })
  }
  }

  addDescription() {
    if (this.checkRows() != true) {
    this._dialog.open(AddDescriptionComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected
      }
    });
  }
  }

  enableProduct() { 
    if (this.checkRows() != true) {
    this._productService.enableProduct(this.selection.selected);
    }
  }

  disableProduct() {
    if (this.checkRows() != true) {
    this._productService.disableProduct(this.selection.selected);
  }
}

  addGender() {
    if (this.checkRows() != true) {
    this._dialog.open(AddGenderComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected
      }
    })
  }
  }

  addDiscount() {
    if (this.checkRows() != true) {
    this._dialog.open(DiscountPriceComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected
      }
    })
  }
  }
  changeStatus() {
    if (this.checkRows() != true) {
    this._dialog.open(ProductStatusComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected
      }
    })
  }
  }
  addCategory() {

    if (this.checkRows() != true) {
      this._dialog.open(AddCategoryComponent, {
        width: "60%",
        data: {
          dataKey: this.selection.selected
        }
      });
    }
  }
  checkRows() {
    if (this.selection.selected.length == 0) {
      this._dialog.open(WarningComponent);
      return true
    }
  }
  onSearch(form: NgForm) {
    this.result = this._productService.searchForProduct(form.value.search);
    this.dataSource.data = this._productService.searchForProduct(form.value.search);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.result);
    
  }
}

