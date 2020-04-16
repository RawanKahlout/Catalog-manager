import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { CdkTableModule } from "@angular/cdk/table";
import { productService } from '../product.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ShowImageComponent } from '../popup/show-image/show-image.component';
import { Params, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AddCategoryComponent } from '../disabledProductActions/add-category/add-category.component'
import { AddGenderComponent } from '../add-gender/add-gender.component';
import { AddDescriptionComponent } from '../disabledProductActions/add-description/add-description.component';
import { AddPriceComponent } from '../add-price/add-price.component';
import { DiscountPriceComponent } from '../discount-price/discount-price.component';
import { JsonMapperPipe } from '../pipe/json-mapper.pipe';
import { NgForm } from '@angular/forms';
import { ProductStatusComponent } from '../product-status/product-status.component';
import { WarningComponent } from '../popup/warning/warning.component';
import { SuccessComponent } from '../popup/success/success.component';
import { from } from 'rxjs';
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
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent implements OnInit {
  returnedValue;
  dataSource = new MatTableDataSource();
  displayedColumns;
  routerParams: Params;
  result;
  count;
  constructor(private _productService: productService, private _dialog: MatDialog, private _router: Router, private _ActivatedRoute: ActivatedRoute) { 
      this._router.routeReuseStrategy.shouldReuseRoute = function(){
         return false;
      }
      this._router.events.subscribe((evt) => {
         if (evt instanceof NavigationEnd) {
            // trick the Router into believing it's last link wasn't previously loaded
            this._router.navigated = false;
            // if you need to scroll back to top, here is the right place
            window.scrollTo(0, 0);
         }
     });
  }
  ngOnInit() {
    this.getParams();
    this.displayedColumns = this.getTableHeader(this.routerParams);
    this.dataSource.filterPredicate = (data: tableCol, filter: string): boolean => {
      const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
        return (currentTerm + (data as { [key: string]: any })[key]);
      }, '').toLowerCase();
      let terms = filter.replace(/\s/g, "|");
      let regEx = new RegExp(terms);

      return regEx.test(dataStr);
    }
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selection = new SelectionModel(true, []);

columns = [
    { columnDef: 'thumbnailImageUrl', header: 'Thumbnail Image', cell: (element: any) => `${element.thumbnailImageUrl}` },
    { columnDef: 'parentSku', header: 'Parent Sku', cell: (element: any) => `${element.parentSku}` },
    { columnDef: 'parentId', header: 'Parent Id', cell: (element: any) => `${element.parentId}` },
    { columnDef: 'owner', header:'Owner', cell: (element: any) => mapper("", element.owner) },
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

  common = ['Select','thumbnailImageUrl', 'parentSku', 'parentId', 'price', 'salePrice','discountPercentage', 'owner'];
  Disabled = this.common; Outofstock = this.common; invisible = this.common; Nocategory = this.common; Banned = this.common; Nodescription=this.common;
  NoImage = ['Select','parentId','parentSku','price','owner'];
  Noprice = ['Select','parentId','parentSku','brand','owner','thumbnailImageUrl'];
  
getTableData(issueName){
    this._productService.getDaynamic(issueName).subscribe(
      data => {
        this.result = data;
        this.count=this.result.count;
        console.log(this.count);
        if (this.count == 0){
          const text = document.getElementById('content');
          text.innerHTML += "<p style='font-size:30px;text-align:center;font-weight:bold;'class='myCenter'>No product here !</p>"
          return}
        this.dataSource.data = this.result.data;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

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
          return this.Disabled;
        }
      case "NoImage": {
        this.getTableData('noImages')
        return this.NoImage;
      }

      case "Outofstock":{
        this.getTableData('outOfStock');
        return this.Outofstock;
      }
      case "Noprice":{
        this.getTableData('noPrice');
        return this.Noprice;
      
      }
      case "Nocategory":{
        this.getTableData('noCategories');
        return this.Nocategory;
      }
      case "Banned":{
        this.getTableData('banned');
        return this.Banned;
      }
      case "Invisible":{
        this.getTableData('invisible')
        return this.invisible;
      } 
      case "Nodescription":{
        this.getTableData('disabled')
        return this.Nodescription;
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  onImage(row) {
    this._dialog.open(ShowImageComponent, {
      width: "60%",
      data: row.imageUrl
    })
  }
  getParams() {
    this._ActivatedRoute.params.subscribe(params => { this.routerParams = params.issue })
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

  enableProduct() {
    if (this.checkRows() != true) {
      this._dialog.open(SuccessComponent);
      this._productService.enableProduct(this.selection.selected);
    }
  }

  disableProduct() {
    if (this.checkRows() != true) {
      this._dialog.open(SuccessComponent);
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
  addDescription() {
    if (this.checkRows() != true) {
    this._dialog.open(AddDescriptionComponent, {
      width: "60%",
      data: {
        dataKey: this.selection.selected,
      }
    });
  }
  }
  checkRows() {
    if (this.routerParams.toString() == 'Nodescription' && this.selection.selected.length > 1 ){
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
}

function mapper(type, value) {
  if (!value) return "N/A";
  if (type == "date") return (new Date(value)).toLocaleDateString();
  return value;
}






