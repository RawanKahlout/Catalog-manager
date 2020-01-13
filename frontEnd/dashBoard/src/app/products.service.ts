import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class productService {

    constructor(private http: HttpClient) { }
    
    uploadTemplate(fileObj) {
        
        this.http.post('http://localhost:3000/upload', fileObj , {observe :'body',
        params : new HttpParams().append('token',localStorage.getItem('token'))})
            .subscribe(res => {
            })
        }
    }
