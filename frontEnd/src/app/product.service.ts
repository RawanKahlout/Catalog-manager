import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import{MatDialog}from '@angular/material/dialog';
import{SuccessComponent}from './popup/success/success.component';
import{WarningComponent}from './popup/warning/warning.component';
@Injectable({ providedIn: 'root' })
export class productService {
    temp: any;
    searchedResult
    constructor(private _http: HttpClient, private _router: Router , private _dialog :MatDialog ) { }
    searchForAllProduct(serchedValue) {
        this.searchedResult= [
            { position: 1, name: 'air max', article: 'e1022a013-009', price:200 ,gender:'men',specialprice:100 ,imageUrl:'https://admin.nejree.com/pub/media/catalog/product/1/_/1_239.jpg'},
            { position: 2, name: 'air zoom', article: 'e1022a013-008', price:300 ,gender:'men',specialprice:100 ,imageUrl:'1.jpg'},
            { position: 3, name: 'ultra boost', article: 'e1022a013-007', price:50 ,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 4, name: 'metkon', article: 'e1022a013-006', price:60 , gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 5, name: 'alpha bounce',article:'e1022a013-005', price:100 ,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 6, name: 'muce',article:'e1022a013-004', price:300,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 7, name: 'NitrogeNite-Jogger Core Blackn',article:'e1022a013-004', price:600,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 8, name: 'Haiwee White',article:'e1022a013-003', price:150,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 9, name: 'Deerupt-S White',article:'e1022a013-002', price:800,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 10, name: 'Adizero-Boston-8 Indigo/Silver/Black',article:'e1022a013-001',price:20,gender:'men',specialprice:100,imageUrl:'1.jpg'},
          
        ];
       return this.searchedResult;
    }
    addDiscountPersentage(discount,category,rowData) {
        if (!category){
            this.updateTableValues("updateDiscount",rowData,discount,0)
        }
       else{
        this.updateTableValues("updateDiscountWithCategory",rowData,discount,category)
       } 
    }
    updateGender(gender,rowData) {
        this.updateTableValues("updateGender",rowData,gender,0)
    }
    updateCategory(category, rowData) {
        this.updateTableValues("updateCategory",rowData,category,0)
    }
   
    enableProduct(selectedRows) {
        this.updateTableValues("enableProduct",selectedRows,0,0)
    }
    disableProduct(selectedRows) {
        this.updateTableValues("disable",selectedRows,0,0)
    }
    addDescription(english, arabic, rowData) { // individually
        this.updateTableValues("addDescription",rowData,english,arabic)
    }
    addPrice(price, rowData) {
        this.updateTableValues("addPrice",rowData,price,0)
    }
    addDiscountPrice(dPrice, rowData){
        this.updateTableValues("addDiscountPrice",rowData,dPrice,0)
    }
    changeStatus(status,selectedRows){
        this.updateTableValues("changeStatus",selectedRows,status,0)
    }
     getDaynamic(type){
      
        return this._http.get('http://15.185.60.39:3000/getProducts/'+ type ,
        { headers: new HttpHeaders().set('authorization','AIzaSyAJX1z5eViPN6M_-Dzd7XPBQWGBqo-vQt8'),
        
         })
        }
    updateTableValues(operationType,rowData,data,extraData){
        //Ask hussain about the condition of update 
        //what should i change for enable/disable/status
        //value of selection ID or name , id of each 
        rowData.dataKey.forEach(rowDataElement => {
            this.searchedResult
            .forEach(element => {
                if (operationType == "updateGender" && rowDataElement.article == element.article) {element.gender = data}
                else if (operationType == "updateGenderWithCategory" && rowDataElement.article == element.article){ 
                    element.gender = data;
                }
                else if (operationType == "updateCategory" && rowDataElement.article == element.article){}
                else if (operationType == "changeStatus" && rowDataElement.article == element.article){}
                else if (operationType == "enableProduct" && rowDataElement.article == element.article){}
                else if (operationType == "disableProduct" && rowDataElement.article == element.article){}
                else if (operationType == "addPrice" && rowDataElement.article == element.article){}
                else if (operationType == "addDiscountPrice" && rowDataElement.article == element.article){}
                else if (operationType == "addDescription" && rowDataElement.article == element.article){}
                else if (operationType == "updateDiscount" && rowDataElement.article == element.article){}
                else if (operationType =="updateDiscountWithCategory" && rowDataElement.article == element.article){}
            })
        });   
    }
    getSearchedFeaturedProduct(ArrayOfArticles){
          this.searchedResult= [
            { position: 1, name: 'air max', article: 'e1022a013-009', price:200 ,gender:'men',specialprice:100 ,imageUrl:'https://admin.nejree.com/pub/media/catalog/product/1/_/1_239.jpg'},
            { position: 2, name: 'air zoom', article: 'e1022a013-008', price:300 ,gender:'men',specialprice:100 ,imageUrl:'1.jpg'},
            { position: 3, name: 'ultra boost', article: 'e1022a013-007', price:50 ,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 4, name: 'metkon', article: 'e1022a013-006', price:60 , gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 5, name: 'alpha bounce',article:'e1022a013-005', price:100 ,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 6, name: 'muce',article:'e1022a013-004', price:300,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 7, name: 'NitrogeNite-Jogger Core Blackn',article:'e1022a013-004', price:600,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 8, name: 'Haiwee White',article:'e1022a013-003', price:150,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 9, name: 'Deerupt-S White',article:'e1022a013-002', price:800,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 10, name: 'Adizero-Boston-8 Indigo/Silver/Black',article:'e1022a013-001',price:20,gender:'men',specialprice:100,imageUrl:'1.jpg'},
          
        ];
       return this.searchedResult;
    }
    submitFeaturedProduct(selectedRows){
        console.log(selectedRows)
    }
    getCurrentFeaturedProduct(){
        this.searchedResult= [
            { position: 1, name: 'air max', article: 'e1022a013-009', price:200 ,gender:'men',specialprice:100 ,imageUrl:'https://admin.nejree.com/pub/media/catalog/product/1/_/1_239.jpg'},
            { position: 2, name: 'air zoom', article: 'e1022a013-008', price:300 ,gender:'men',specialprice:100 ,imageUrl:'1.jpg'},
            { position: 3, name: 'ultra boost', article: 'e1022a013-007', price:50 ,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 4, name: 'metkon', article: 'e1022a013-006', price:60 , gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 5, name: 'alpha bounce',article:'e1022a013-005', price:100 ,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 6, name: 'muce',article:'e1022a013-004', price:300,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 7, name: 'NitrogeNite-Jogger Core Blackn',article:'e1022a013-004', price:600,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 8, name: 'Haiwee White',article:'e1022a013-003', price:150,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 9, name: 'Deerupt-S White',article:'e1022a013-002', price:800,gender:'men',specialprice:100,imageUrl:'1.jpg'},
            { position: 10, name: 'Adizero-Boston-8 Indigo/Silver/Black',article:'e1022a013-001',price:20,gender:'men',specialprice:100,imageUrl:'1.jpg'},
          
        ];
       return this.searchedResult;
    }
    deleteOneFeaturedProduct(row){
        console.log("service");
        console.log(row)
        this._dialog.open(SuccessComponent);
    }
}