import { Component, OnInit } from '@angular/core';
import { uploadService } from '../../upload.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-upload-reports',
  templateUrl: './upload-reports.component.html',
  styleUrls: ['./upload-reports.component.css']
})
export class UploadReportsComponent implements OnInit {
  temp: any;
  myRes: any;
  flag = 0;
  constructor(private _uploadService: uploadService, private http: HttpClient) { 
    this._uploadService.getUploadProductReport().subscribe(
      data => {
        this.myRes = data;
        console.log(this.myRes);
      }
      ,
      error=>{
        console.log(error);
      }
    );
  }
  ngOnInit() {
  }
  onTable() {
    this.flag = 1;
  }
}
