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
import{dataService}from '../../data.service';
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
  columns = [
    { columnDef: 'thumbnailImageUrl', header: 'Thumbnail Image', cell: (element: any) => `${element.thumbnailImageUrl}` },
    { columnDef: 'parentSku', header: 'Parent Sku', cell: (element: any) => `${element.parentSku}` },
    { columnDef: 'parentId', header: 'Parent Id', cell: (element: any) => `${element.parentId}` },
    { columnDef: 'owner', header: 'Owner', cell: (element: any) => mapper("", element.owner) },
    { columnDef: 'delete', header: 'Delete', cell: (element: any) => `${element.delete}` },
    { columnDef: 'Select', header: 'Select', cell: (element: any) => `${element.Select}` },
    { columnDef: 'specialprice', header: 'specialprice', cell: (element: any) => mapper("", element.specialprice) },
    { columnDef: 'position', header: 'position', cell: (element: any) => mapper("", element.position) },
    { columnDef: 'article', header: 'Articles', cell: (element: any) => mapper("", element.article) },
    { columnDef: 'entityId', header: 'EntityId', cell: (element: any) => mapper("date", element.entityId) },
    { columnDef: 'createdAt', header: 'createdAt', cell: (element: any) => mapper("date", element.createdAt) },
    { columnDef: 'updatedAt', header: 'updatedAt.', cell: (element: any) => mapper("date", element.updatedAt) },
    { columnDef: 'name', header: 'Name', cell: (element: any) => mapper("", element.name) },
    { columnDef: 'sku', header: 'sku', cell: (element: any) => mapper("", element.sku) },
    { columnDef: 'productType', header: 'productType', cell: (element: any) => mapper("", element.productType) },
    { columnDef: 'price', header: 'Price', cell: (element: any) => mapper("", element.price) },
    { columnDef: 'salePrice', header: 'Sale Price', cell: (element: any) => mapper("", element.salePrice) },
    { columnDef: 'discountPercentage', header: 'Discount Percentage', cell: (element: any) => mapper("", element.discountPercentage) },
    { columnDef: 'quantity', header: 'quantity', cell: (element: any) => mapper("", element.quantity) },
    { columnDef: 'categoriesId', header: 'categoriesId', cell: (element: any) => mapper("", element.categoriesId) },
    { columnDef: 'categories', header: 'categories', cell: (element: any) => mapper("", element.categories) },
    { columnDef: 'imageUrl', header: 'imageUrl', cell: (element: any) => mapper("", element.imageUrl) },
    { columnDef: 'brand', header: 'brand', cell: (element: any) => mapper("", element.brand) },
    { columnDef: 'brandId', header: 'brandId', cell: (element: any) => mapper("", element.brandId) },
    { columnDef: 'gender', header: 'Gender', cell: (element: any) => mapper("", element.gender) },
    { columnDef: 'genderId', header: 'genderId', cell: (element: any) => mapper("", element.genderId) },
    { columnDef: 'type', header: 'type', cell: (element: any) => mapper("", element.type) },
    { columnDef: 'typeId', header: 'typeId', cell: (element: any) => mapper("", element.typeId) },
    { columnDef: 'description', header: 'description', cell: (element: any) => mapper("", element.description) },
    { columnDef: 'stockStatusId', header: 'stockStatusId', cell: (element: any) => mapper("", element.stockStatusId) },
    { columnDef: 'status', header: 'status', cell: (element: any) => mapper("", element.status) },
    { columnDef: 'statusId', header: 'statusId', cell: (element: any) => mapper("", element.statusId) },
    { columnDef: 'visibility', header: 'visibility', cell: (element: any) => mapper("", element.visibility) },
    { columnDef: 'visiblityId', header: 'visiblityId', cell: (element: any) => mapper("", element.visiblityId) }
  ];
  dataSource = new MatTableDataSource();
  displayedColumns;
  routerParams: Params;
  result;
  count;
  constructor(private _changeDetectorRef: ChangeDetectorRef, private _productService: productService, private _dialog: MatDialog, private _router: Router,
     private _dataService:dataService,private _ActivatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.displayedColumns = ['Select', 'thumbnailImageUrl', 'parentSku', 'parentId', 'price', 'salePrice', 'discountPercentage', 'owner', 'delete'];
    this._productService.getDaynamic("featured").subscribe(
      data=>{
        this._productService.getDaynamic("featured").subscribe(
          data => {
          this.result = data;
                 this.count=this.result.count;
                  if (this.count == 0){
                    const text = document.getElementById('content');
                    text.innerHTML += "<p style='padding-top:100px;font-size:30px;text-align:center;font-weight:bolder;class=centerThing'>No product here !</p>"
                    return}
                   this.dataSource.data = this.result.data;
                },
                error => {
                  console.log("ERROR", error)
               }
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteFeatured(row) {
    this.deleteRow(row);
  }
  onImage(row) {
    this._dialog.open(ShowImageComponent, {
      width: "60%",
      data: row.imageUrl
    })
  }
  deleteRow(row) {
    var data = this.dataSource.data;
    data.splice(data.indexOf(row), 1);
    console.log(data.indexOf(row));
    this.dataSource.data = data;
    //this._changeDetectorRef.detectChanges();
    this._productService.deleteOneFeaturedProduct(row);
  }
  download(){
    this._dataService.downloadFile(this.result.data,"Featured Product");
  }
}
function mapper(type, value) {
  if (!value) return "N/A";
  if (type == "date") return (new Date(value)).toLocaleDateString();
  return value;
}