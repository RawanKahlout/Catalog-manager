import { Component, OnInit } from '@angular/core';
import {userService} from '../user.service';
import {HttpClient}from '@angular/common/http';
import { from } from 'rxjs';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(private _userService : userService , private http : HttpClient) { }

  ngOnInit() {
  }
  logout(){
   this._userService.logout();
  
  }

}
