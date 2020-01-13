import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{userService} from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userService:userService ,private router: Router) { }

  ngOnInit() {
    
  }

  login(form : NgForm){
    
    this._userService.loginUser(form.value.email,form.value.password);

  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
