import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { CdkTableModule } from "@angular/cdk/table";
import { productService } from '../product.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ShowImageComponent } from '../popup/show-image/show-image.component';
import { Params, Router,ActivatedRoute } from '@angular/router';
export interface tableCol {
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
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent implements OnInit {
  returnedValue;
  dataSource = new MatTableDataSource();
  displayedColumns;
  routerParams: Params;

  constructor(private _productService: productService, private _dialog: MatDialog, private _router: Router ,private _ActivatedRoute : ActivatedRoute) { }
  ngOnInit() {
    this.getParams();
    this.displayedColumns = this.getTableHeader(this.routerParams);
    this.dataSource.data =this._productService.getDaynamic();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selection = new SelectionModel(true, []);

  columns = [

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
    { columnDef: 'price', header: 'price', cell: (element: any) => mapper("", element.price) },
    { columnDef: 'specialPrice', header: 'specialPrice', cell: (element: any) => mapper("", element.specialPrice) },
    { columnDef: 'discountPercentage', header: 'discountPercentage', cell: (element: any) => mapper("", element.discountPercentage) },
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
 Disabled = ['Select', 'position', 'name', 'article', 'gender', 'specialprice', 'imageUrl'];
 NoImage = [];
 Outofstock = [];
 Noprice = [];
 Banned = [];
 Nocategory = [];
getTableHeader(tableName) {
    switch (tableName) {
      case "Disabled":
        return this.Disabled;
        break;
      case "NoImage":
        return this.NoImage;
        break;
      case "Outofstock":
        return this.Outofstock;
        break;
      case "Noprice":
        return this.Noprice;
        break;
      case "Nocategory":
        return this.Nocategory
      case "Banned":
        return this.Banned
        break
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter)
  }
  onImage(row) {
    this._dialog.open(ShowImageComponent, {
      width: "60%",
      data: row.imageUrl
    })
  }
  getParams() {
   this._ActivatedRoute.params.subscribe(params=>{ this.routerParams = params.issue})
}

}

function mapper(type, value) {
  if (!value) return "N/A";
  if (type == "date") return (new Date(value)).toLocaleDateString();
  return value;
}






