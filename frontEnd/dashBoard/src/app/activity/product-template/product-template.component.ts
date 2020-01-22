import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { productService } from '../../products.service';
import {userService} from '../../user.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
//import {fileUploader } from 'ng-file-upload';
//injectd property mean 1/ impory , 2/create it again on my class
@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {
  recFile: File = null;
  uploadedFile;
  constructor(private http: HttpClient, private _productService: productService , private _userService : userService,private router: Router ) {
    var tok =new HttpParams().get('token');
    console.log("here is tok");
    console.log(tok);
  
  
    this._userService.isActive().subscribe(
      data=> {}    ,
      error => this.router.navigate(['/signin']),
      );
    
   }

  ngOnInit() {
  }
  fileObject(event) {
  this.recFile = <File>event.target.files[0];
  const file =event.target.files[0];
   this.uploadedFile = file;
   
  }
  onUpload() {
    const fileObj = new FormData();
    fileObj.append('file', this.uploadedFile);
    this._productService.uploadTemplate(fileObj)
  }
  

}

