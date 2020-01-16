import { Component, OnInit } from '@angular/core';
import { productService } from '../../products.service';
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
  constructor(private _productService: productService, private http: HttpClient) { }

  ngOnInit() {
    return this.http.get('http://localhost:3000/api/myJson').subscribe(
      Response => {
        this.myRes = Response;
      }
    );
  }

  onTable() {
    this.flag = 1;
  }
}
