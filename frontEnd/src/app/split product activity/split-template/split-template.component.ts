import { Component, OnInit } from '@angular/core';
import{ uploadService } from '../../upload.service';
import { userService } from '../../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-split-template',
  templateUrl: './split-template.component.html',
  styleUrls: ['./split-template.component.css']
})
export class SplitTemplateComponent implements OnInit {
  recFile: File = null;
  uploadedFile;
  constructor( private _uploadService : uploadService , private _userService : userService , private _router : Router) { }

  ngOnInit() {
    this._userService.isActive().subscribe(
      data=> {}    ,
      error => this._router.navigate(['/signin']),
      )
    }
  
  fileObject(event) {
    this.recFile = <File>event.target.files[0];
    const file =event.target.files[0];
     this.uploadedFile = file;
     
    }
    onUpload() {
      const fileObj = new FormData();
      fileObj.append('file', this.uploadedFile);
      this._uploadService.uploadSplitsTemplate(fileObj);
    }
    

}
