import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { SuccessComponent } from './popup/success/success.component';
import { WarningComponent } from './popup/warning/warning.component';
import { ShowImageComponent } from './popup/show-image/show-image.component';
@Injectable({ providedIn: 'root' })
export class productService {
    columns = [
        { columnDef: 'delete', header: 'Delete', cell: (element: any) => `${element.delete}` },
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
    temp: any;
    searchedResult
    searchProductHeader= ['select','image', 'name', 'article', 'price', 'gender', 'status'];
    searchSkusHeader= ['select', 'quantity', 'sku', 'price', 'stockStatus', 'salePrice','size'];
    addFeaturedHeader=['Select','thumbnailImageUrl', 'parentSku', 'parentId', 'price', 'salePrice','discountPercentage', 'owner'];
    editeFeaturedHeader= ['Select', 'thumbnailImageUrl', 'parentSku', 'parentId', 'price', 'salePrice', 'discountPercentage', 'owner', 'delete'];
    commonHiddenHeader = ['Select', 'thumbnailImageUrl', 'parentSku', 'parentId', 'price', 'salePrice', 'discountPercentage', 'owner'];
    Disabled = this.commonHiddenHeader; Outofstock = this.commonHiddenHeader; invisible = this.commonHiddenHeader; Nocategory = this.commonHiddenHeader;
    Banned = this.commonHiddenHeader; noDescription = this.commonHiddenHeader; disabledToParent = this.commonHiddenHeader; differentLanguages = this.commonHiddenHeader;
    outOfStockToParent = this.commonHiddenHeader; differentPrice = this.commonHiddenHeader;
    NoImage = ['Select', 'parentId', 'parentSku', 'price', 'owner'];
    Noprice = ['Select', 'parentId', 'parentSku', 'brand', 'owner', 'thumbnailImageUrl'];
    constructor(private _http: HttpClient, private _router: Router, private _dialog: MatDialog) { }
    getDaynamic(type) {
        return this._http.get('http://15.185.60.39:3000/getProductsNew/' + type,
            {
                headers: new HttpHeaders().set('authorization', 'AIzaSyAJX1z5eViPN6M_-Dzd7XPBQWGBqo-vQt8'),

            })
    }
    get(type,data,price){
    console.log("here in service");
    console.log(data);
    console.log(price);
    return this._http.get('http://localhost:3000/api/uploadProduectReport')
}
    searchForAllProduct(serchedValue) {
        let params = new HttpParams();
        params = params.append('sku', serchedValue);
    
      return this._http.get('http://15.185.60.39:3000/getProductsNew/search?',
            {
                params: params,
                headers: new HttpHeaders().set('authorization', 'AIzaSyAJX1z5eViPN6M_-Dzd7XPBQWGBqo-vQt8'),

            }
      )
    }
    filter(queryData){
        console.log(queryData)
        return this._http.get('http://15.185.60.39:3000/getProductsNew/search?',{ 
        params : queryData,
        headers: new HttpHeaders().set('authorization', 'AIzaSyAJX1z5eViPN6M_-Dzd7XPBQWGBqo-vQt8'),})
    }
    skusFilter(queryData){
        return this._http.get('http://15.185.60.39:3000/getProductsNew/searchSku?',{ 
            params : queryData,
            headers: new HttpHeaders().set('authorization', 'AIzaSyAJX1z5eViPN6M_-Dzd7XPBQWGBqo-vQt8'),})
    }
    addDiscountPersentage(discount, category, rowData) {
        if (!category) {
          //  this.updateTableValues("updateDiscount", rowData, discount, 0)
        }
        else {
         //   this.updateTableValues("updateDiscountWithCategory", rowData, discount, category)
        }
    }
    updateGender(gender, rowData) {
      //  this.updateTableValues("updateGender", rowData, gender, 0)
    }
    updateCategory(category, rowData) {
      //  this.updateTableValues("updateCategory", rowData, category, 0)
    }
    disableProduct(selectedRows) {
      //  this.updateTableValues("disable", selectedRows, 0, 0)
    }
    addDescription(english, arabic, rowData) { // individually
     //   this.updateTableValues("addDescription", rowData, english, arabic)
    }
    addPrice(price, rowData) {
    //    this.updateTableValues("addPrice", rowData, price, 0)
    }
    addDiscountPrice(dPrice, rowData) {
        //this.updateTableValues("addDiscountPrice", rowData, dPrice, 0)
    }
    changeStatus(status, selectedRows) {
        //this.updateTableValues("changeStatus", selectedRows, status, 0)
    }
    getSearchedFeaturedProduct(ArrayOfArticles) {
        this.searchedResult = [
            { position: 1, name: 'air max', article: 'e1022a013-009', price: 200, gender: 'men', specialprice: 100, imageUrl: 'https://admin.nejree.com/pub/media/catalog/product/1/_/1_239.jpg' },
            { position: 2, name: 'air zoom', article: 'e1022a013-008', price: 300, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { position: 3, name: 'ultra boost', article: 'e1022a013-007', price: 50, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { position: 4, name: 'metkon', article: 'e1022a013-006', price: 60, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { position: 5, name: 'alpha bounce', article: 'e1022a013-005', price: 100, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { position: 6, name: 'muce', article: 'e1022a013-004', price: 300, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { position: 7, name: 'NitrogeNite-Jogger Core Blackn', article: 'e1022a013-004', price: 600, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { position: 8, name: 'Haiwee White', article: 'e1022a013-003', price: 150, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { position: 9, name: 'Deerupt-S White', article: 'e1022a013-002', price: 800, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { position: 10, name: 'Adizero-Boston-8 Indigo/Silver/Black', article: 'e1022a013-001', price: 20, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },

        ];
        return this.searchedResult;
    }
    submitFeaturedProduct(selectedRows) {
        console.log(selectedRows)
    }
    deleteOneFeaturedProduct(row) {
        console.log("service");
        console.log(row)
        this._dialog.open(SuccessComponent);
    }
    searchForAllSkus(serchedValue){
        let params = new HttpParams();
        params = params.append('parentSku', serchedValue);
    
      return this._http.get('http://15.185.60.39:3000/getProductsNew/searchSku?',
            {
                params: params,
                headers: new HttpHeaders().set('authorization', 'AIzaSyAJX1z5eViPN6M_-Dzd7XPBQWGBqo-vQt8'),

            }
      )
    }
    enableProduct(selectedRows) {}
    onImage(row) {
        this._dialog.open(ShowImageComponent, {
          width: "60%",
          panelClass: "myapp-no-padding-dialog",
          data: row.imageUrl})
    }
    checkRows(routerParams,selectionLength,actionName){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = "60%";
      if (selectionLength > 1) {
        if (routerParams.toString() == 'noDescription' || routerParams.toString() == 'differentLanguages' || actionName == 'addDescription') {
          dialogConfig.data = "Select only one product"
          this._dialog.open(WarningComponent, dialogConfig);
          return true
        }
      }
      else if (selectionLength == 0) {
        dialogConfig.data = "You have to select a product before any operation"
        this._dialog.open(WarningComponent, dialogConfig);
        return true
      }
    }
}
function mapper(type, value) {
    if (!value) return "N/A";
    if (type == "date") return (new Date(value)).toLocaleDateString();
    return value;
  }