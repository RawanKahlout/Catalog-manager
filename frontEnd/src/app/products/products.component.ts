import {Component , OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import{productService}from '../product.service';
import { DataSource } from '@angular/cdk/table';
import { CpuInfo } from 'os';
export interface  cols{
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
//dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor( private _productService : productService) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //displayedColumns: string[] = [ 'position', 'name', 'article', 'price', 'gender', 'specialprice', 'image'];
  dataSource = new MatTableDataSource();
  ngOnInit() {
   this.dataSource = this._productService.searchedProductResult();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
