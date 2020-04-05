import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrôgen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Béryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Bóron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'ÔLxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-table-filtering-example',
  templateUrl: './table-filtering-example.component.html',
  styleUrls: ['./table-filtering-example.component.css']
})
export class TableFilteringExampleComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<PeriodicElement>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string): boolean => {
      const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
        return (currentTerm + (data as { [key: string]: any })[key] + '◬');
      }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

      const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

      return dataStr.indexOf(transformedFilter) != -1;
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
