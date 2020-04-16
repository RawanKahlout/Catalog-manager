import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import{Router}from '@angular/router';

@Injectable({ providedIn: 'root' })
export class dataService {
temp : any;
    constructor(private _http: HttpClient , private _router : Router) { }
    getBlocksData(){
        var data = [
          {disabled: 10},
          {noimage  :300},
          {outOfStock:500},
          {noPrice:600},
          {Nocategory :500},
          {Banned:600},
          {invisible : 0},
          {description : 0}
            ];
            return data;
    }

}