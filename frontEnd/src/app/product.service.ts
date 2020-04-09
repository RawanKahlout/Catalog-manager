import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class productService {
    temp: any;
    searchedResult
    constructor(private _http: HttpClient, private _router: Router) { }
    searchedProductResult(){
        this.searchedResult
        = [
            {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
          
        ];
        return this.searchedResult
        ;
    }
    searchForProduct(serchedValue) {
        this.searchedResult
        = [
            { position: 1, name: 'air max', article: 'e1022a013-009', price:200 ,gender:'men',specialprice:100 ,image:'1.jpg'},
            { position: 2, name: 'air zoom', article: 'e1022a013-008', price:300 ,gender:'men',specialprice:100 ,image:'1.jpg'},
            { position: 3, name: 'ultra boost', article: 'e1022a013-007', price:50 ,gender:'men',specialprice:100,image:'1.jpg'},
            { position: 4, name: 'metkon', article: 'e1022a013-006', price:60 , gender:'men',specialprice:100,image:'1.jpg'},
            { position: 5, name: 'alpha bounce',article:'e1022a013-005', price:100 ,gender:'men',specialprice:100,image:'1.jpg'},
            { position: 6, name: 'muce',article:'e1022a013-004', price:300,gender:'men',specialprice:100,image:'1.jpg'},
            { position: 7, name: 'NitrogeNite-Jogger Core Blackn',article:'e1022a013-004', price:600,gender:'men',specialprice:100,image:'1.jpg'},
            { position: 8, name: 'Haiwee White',article:'e1022a013-003', price:150,gender:'men',specialprice:100,image:'1.jpg'},
            { position: 9, name: 'Deerupt-S White',article:'e1022a013-002', price:800,gender:'men',specialprice:100,image:'1.jpg'},
            { position: 10, name: 'Adizero-Boston-8 Indigo/Silver/Black',article:'e1022a013-001',price:20,gender:'men',specialprice:100,image:'1.jpg'},
          
        ];
       return this.searchedResult;
    }
    updateCategory(category, rowData) {
        rowData.dataKey.forEach(rowDataElement => {
            this.searchedResult
            .forEach(element => {
                if (rowDataElement.name == element.name) { element.name = "rawan" }
            })
        });
    }
    updateGender(gender, rowData) {
        rowData.dataKey.forEach(rowDataElement => {
            console.log(rowDataElement.gender);
            this.searchedResult
            .forEach(element => {
                if (rowDataElement.gender == element.gender) { element.gender = gender }
            })
        });
    }
    enableProduct(selectedRows) {
        console.log("service");
        console.log(selectedRows);
    }
    disableProduct(selectedRows) {
        console.log("service");
        console.log(selectedRows);
    }
    addDescription(english, arabic, rowData) { // individually
        console.log(english)
        console.log(arabic)
        console.log(rowData)
    }
    addPrice(price, rowData) {
        console.log(price);
        console.log(rowData);
    }
    addDiscountPrice(dPrice, rowData){
        console.log(dPrice);
        console.log(rowData);
    }
    changeStatus(status,selectedRows){
        console.log(status);
        console.log(selectedRows);
    }
    getDaynamic(){
        this.searchedResult
        = [
            { position: 1, name: 'air max', article: 'e1022a013-009', price:200 ,gender:'men',specialprice:100 ,imageUrl:'1.jpg'},
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
       return {data:this.searchedResult,tableName:"disabled"}
    }
    updateTableValues(){
     
    }
}