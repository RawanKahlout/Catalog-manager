import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { productService } from '../product.service';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddCategoryComponent } from '../disabledProductActions/add-category/add-category.component'
import { AddGenderComponent } from '../add-gender/add-gender.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-disabled-product',
  templateUrl: './disabled-product.component.html',
  styleUrls: ['./disabled-product.component.css']
})
export class DisabledProductComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  constructor(private _productService: productService, private _dialog: MatDialog) { }
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = this._productService.getDiabledProduct();
  }
  filterPredicate() {
    var filteredValues = ["hydrogen", "boron"];
    var filteredValues2 = "boron";
    this.dataSource.filter = JSON.stringify(filteredValues);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addPrice() { }

  addDescription() { }
  enableProduct() { }
  disableProduct() { }
  addGender() {
    this._dialog.open(AddGenderComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected
      }
    })
  }
  addCategory() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; //when press out side the window
    dialogConfig.autoFocus = true;// 
    dialogConfig.width = "60%";
    dialogConfig.data = this.selection.selected;
    this._dialog.open(AddCategoryComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected
      }
    });

  }
}

