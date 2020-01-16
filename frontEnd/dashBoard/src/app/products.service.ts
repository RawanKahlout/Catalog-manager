import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import{Router}from '@angular/router';

@Injectable({ providedIn: 'root' })
export class productService {
temp : any;
    constructor(private http: HttpClient , private _router : Router) { }
    
    uploadTemplate(fileObj) {
        
        this.http.post('http://localhost:3000/upload', fileObj , {observe :'body',
        params : new HttpParams().append('token',localStorage.getItem('token'))})
            .subscribe(res => {
 
            })
        }
    }

    