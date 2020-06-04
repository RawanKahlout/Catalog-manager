import { Injectable } from '@angular/core';
import { HttpClient , HttpParams, HttpHeaders } from '@angular/common/http';
import{Router}from '@angular/router';

@Injectable({ providedIn: 'root' })
export class dataService {
temp : any;
    constructor(private _http: HttpClient , private _router : Router) { }
    getStatistics(){
     return this._http.get('http://15.185.60.39:3000/getProductsNew/stats',{
         headers : new HttpHeaders().set('authorization','AIzaSyAJX1z5eViPN6M_-Dzd7XPBQWGBqo-vQt8')
     })
    }
}