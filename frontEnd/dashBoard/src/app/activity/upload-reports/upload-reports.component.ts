import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-reports',
  templateUrl: './upload-reports.component.html',
  styleUrls: ['./upload-reports.component.css']
})
export class UploadReportsComponent implements OnInit {
  myRes: any ={
          "totalproccessedarticles": "43 out of: 43",
          "totalproccessedskus": "292 out of: 292",
          "rejectedskus": {
            "duplicate": {
              "articles": [],
              "rows": []
            },
            "notFound": {
              "skus": [],
              "rows": []
            }},
            "rejectedarticles": {
              "duplicate": {
                "articles": [],
                "rows": []
              },
              "noSkus": {
                "articles": [
                  "1010570-12N-2"
                ],
                "rows": [
                  2
                ]
              }
              
            },
            "unknownfailure": [],
            "fail": [],
            "sentproducts": {
              "369486-03": {
                "article": "369486-03",
                "name": "Nova-90S-Bloc-White",}
              }
          };
  constructor() { }

  ngOnInit() {
    console.log(this.myRes.totalproccessedarticles);
  }

}
