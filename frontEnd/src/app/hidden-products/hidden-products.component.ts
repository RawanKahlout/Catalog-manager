import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel} from '@angular/cdk/collections';
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
  returnedValue;
  dataSource = new MatTableDataSource();
  displayedColumns;
  routerParams: Params;
  result;
  count;
  constructor(private _MatDialogConfig: MatDialogConfig, private _ChangeDetectorRef: ChangeDetectorRef, private _productService: productService, private _dialog: MatDialog, private _router: Router, private _ActivatedRoute: ActivatedRoute) {
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
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
  @ViewChild(MatPaginator, { static: false }) set Paginatorcontent(paginator: MatPaginator) {
    this.dataSource.paginator = paginator
  }
  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  selection = new SelectionModel(true, []);
  columns = [
    { columnDef: 'thumbnailImageUrl', header: 'Thumbnail Image', cell: (element: any) => `${element.thumbnailImageUrl}` },
    { columnDef: 'parentSku', header: 'Parent Sku', cell: (element: any) => `${element.parentSku}` },
    { columnDef: 'parentId', header: 'Parent Id', cell: (element: any) => `${element.parentId}` },
    { columnDef: 'owner', header: 'Owner', cell: (element: any) => mapper("", element.owner) },
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
  common = ['Select', 'thumbnailImageUrl', 'parentSku', 'parentId', 'price', 'salePrice', 'discountPercentage', 'owner'];
  Disabled = this.common; Outofstock = this.common; invisible = this.common; Nocategory = this.common; Banned = this.common; Nodescription = this.common;
  NoImage = ['Select', 'parentId', 'parentSku', 'price', 'owner'];
  Noprice = ['Select', 'parentId', 'parentSku', 'brand', 'owner', 'thumbnailImageUrl'];

  getTableData(issueName) {
    this.dataSource.data = this._productService.getDaynamic(issueName);
    //this._productService.getDaynamic(issueName).subscribe(
    //data => {
    //this.result = data;
    //        this.count=this.result.count;
    //        if (this.count == 0){
    //          const text = document.getElementById('content');
    //          text.innerHTML += "<p style='padding-top:100px;font-size:30px;text-align:center;font-weight:bolder;class=centerThing'>No product here !</p>"
    //          return}
    //        this.dataSource.data = this.result.data;
    //      },
    //      error => {
    //        console.log("ERROR", error)
    //      }
    //    )

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

      case "Outofstock": {
        this.getTableData('outOfStock');
        return this.Outofstock;
      }
      case "Noprice": {
        this.getTableData('noPrice');
        return this.Noprice;

      }
      case "Nocategory": {
        this.getTableData('noCategories');
        return this.Nocategory;
      }
      case "Banned": {
        this.getTableData('banned');
        return this.Banned;
      }
      case "Invisible": {
        this.getTableData('invisible')
        return this.invisible;
      }
      case "Nodescription": {
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
    if (this.routerParams.toString() == 'Nodescription' && this.selection.selected.length > 1) {
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
  openDialog(DialogBodyComponent, data) {
    if (this.checkRows() != true) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = data;
      dialogConfig.width = "60%";
      let dialogRef = this._dialog.open(DialogBodyComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.deleteRow(this.selection.selected);
          console.log("yesssssssssssssssssssssssssss");
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
}
function mapper(type, value) {
  if (!value) return "N/A";
  if (type == "date") return (new Date(value)).toLocaleDateString();
  return value;
}






