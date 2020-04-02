import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import{Router}from '@angular/router';

@Injectable({ providedIn: 'root' })
export class dataService {
temp : any;
    constructor(private _http: HttpClient , private _router : Router) { }
    getBlocksData(){
        var data = [
          {disabledProduct : 5},
          {products :300},
          {outOfStock:500},
          {noPrice:600},
          {InStock:500},
          {rubaiat:600}
            ];
            return data;
    }

}