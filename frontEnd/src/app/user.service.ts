import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class userService {
       logged;
        constructor(private _http: HttpClient ,  private _router: Router) { }
        loginUser(email, password) {
                return this._http.post('http://localhost:3000/api/login', { email, password })
                .subscribe(
                        data => {
                              localStorage.setItem('token',data.toString());  
                              
                              this._router.navigate(['/home-page']);
                        },
                        error=>{
                             
                                       
                        }
                );
        }
       
        isActive(){
         
                const tokens =localStorage.getItem('token');
                return this._http.get('http://localhost:3000/api/isActive',{
                        observe :'body',
                       params : new HttpParams().append('token',localStorage.getItem('token')),
                      
                })
                
        }

        logout(){
                var token=localStorage.getItem('token')
                return this._http.get('http://localhost:3000/api/logout',{
                    observe :'body',
                    params : new HttpParams().append('token',localStorage.getItem('token')),
                }).subscribe(data=>{
                    this._router.navigate(['/signin'])
                    localStorage.removeItem('token');
                },
                error=>{
                    this._router.navigate(['/signin'])
                    localStorage.removeItem('token');}
                )
            }
            
}
     
        




