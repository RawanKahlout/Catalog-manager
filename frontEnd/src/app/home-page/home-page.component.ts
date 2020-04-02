import { Component, OnInit } from '@angular/core';
import{dataService}from '../data.service';
import { element } from 'protractor';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
blocks// to be accceed by html
  constructor(private _dataService : dataService) { }
  ngOnInit() {
    this.blocks = this._dataService.getBlocksData();

    console.log(this.blocks[0])

  }

}
