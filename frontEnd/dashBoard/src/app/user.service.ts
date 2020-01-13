import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class userService {
        
        constructor(private http: HttpClient ,  private router: Router) { }
        loginUser(email, password) {
               
                return this.http.post('http://localhost:3000/api/login', { email, password })
                .subscribe(
                        data => {
                              localStorage.setItem('token',data.toString());  
                              this.router.navigate(['/upload']);
                        },
                        error=>{
                                        console.log(error);
                        }
                );
        }
       
        isActive(){
         
                const tokens =localStorage.getItem('token');
                return this.http.get('http://localhost:3000/api/isActive',{
                        observe :'body',
                       params : new HttpParams().append('token',localStorage.getItem('token'))
                })
                
        }
        
}



