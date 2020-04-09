import { Component, OnInit } from '@angular/core';
import{dataService}from '../data.service';
import { element, Key } from 'protractor';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
preBlocks// to be accceed by html
blocks : any[]=[];
  constructor(private _dataService : dataService) { }
  ngOnInit() {
    this.preBlocks = this._dataService.getBlocksData();
    //this.preBlocks.forEach(element => {
      //for (var Key in element) {
       // this.blocks.push(Key)
     // }
  //})
}

}


