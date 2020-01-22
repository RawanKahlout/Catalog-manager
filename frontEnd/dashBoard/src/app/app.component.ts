import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { userService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private _http: HttpClient, private _userService: userService) { 
  
  }
  title = 'dashBoard';
  logged;
 
  

  getToken(){
    console.log("here i am on get token");
    console.log(this.logged);
    return this.logged;
  }



}
