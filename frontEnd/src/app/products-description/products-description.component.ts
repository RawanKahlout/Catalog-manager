import { Component, OnInit } from '@angular/core';
import { uploadService } from '../upload.service';
import {userService} from '../user.service';
import { Router } from '@angular/router';
import { HttpClient , HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-products-description',
  templateUrl: './products-description.component.html',
  styleUrls: ['./products-description.component.css']
})
export class ProductsDescriptionComponent implements OnInit {
  recFile: File = null;
  uploadedFile;
  constructor(private http: HttpClient, private _uploadService: uploadService , private _userService : userService,private router: Router) {
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
      this._uploadService.uploadDescriptions(fileObj)
    }
}
