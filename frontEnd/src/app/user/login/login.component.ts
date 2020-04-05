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
 errorMessage;
  constructor(private _userService:userService ,private _router: Router) { }

  ngOnInit() {
    window.document.body.style.backgroundColor= "black";
  }

  onSubmit(form : NgForm){
    this._userService.loginUser(form.value.email,form.value.password).subscribe(
      data => {
            localStorage.setItem('token',data.toString());  
            
            this._router.navigate(['/home-page']);
      },
      error=>{
        console.log("here us in the error block");
              this.errorMessage = error;      
      })
}

}
