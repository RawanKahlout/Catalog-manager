import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from './popup/success/success.component';
import { WarningComponent } from './popup/warning/warning.component';
@Injectable({ providedIn: 'root' })
export class productService {
    temp: any;
    searchedResult
    constructor(private _http: HttpClient, private _router: Router, private _dialog: MatDialog) { }
    getDaynamic(type) {
        this.searchedResult = [
            { parentId:100,position: 1, name: 'air max', article: 'e1022a013-009', price: 200, gender: 'men', specialprice: 100, imageUrl: 'https://admin.nejree.com/pub/media/catalog/product/1/_/1_239.jpg' },
            { parentId:900,position: 2, name: 'air zoom', article: 'e1022a013-008', price: 300, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { parentId:800,position: 3, name: 'ultra boost', article: 'e1022a013-007', price: 50, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { parentId:700,position: 4, name: 'metkon', article: 'e1022a013-006', price: 60, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { parentId:700,position: 5, name: 'alpha bounce', article: 'e1022a013-005', price: 100, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { parentId:600,position: 6, name: 'muce', article: 'e1022a013-004', price: 300, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { parentId:500,position: 7, name: 'NitrogeNite-Jogger Core Blackn', article: 'e1022a013-004', price: 600, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { parentId:400,position: 8, name: 'Haiwee White', article: 'e1022a013-003', price: 150, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { parentId:300,position: 9, name: 'Deerupt-S White', article: 'e1022a013-002', price: 800, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },
            { parentId:200,position: 10, name: 'Adizero-Boston-8 Indigo/Silver/Black', article: 'e1022a013-001', price: 20, gender: 'men', specialprice: 100, imageUrl: '1.jpg' },

        ];
        return this.searchedResult;
        return this._http.get('http://15.185.60.39:3000/getProducts/' + type,
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
    getCurrentFeaturedProduct() {
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
    searchForAllProduct(serchedValue) {
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
    enableProduct(selectedRows) {}
}