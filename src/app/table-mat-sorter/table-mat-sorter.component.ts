import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { MatPaginator } from '@angular/material/paginator';

export interface IData {
  id: number;
  name: string;
  type: string;
  price: number;
}

@Component({
  selector: 'app-table-mat-sorter',
  templateUrl: './table-mat-sorter.component.html',
  styleUrls: ['./table-mat-sorter.component.css'],
})
export class TableMatSorterComponent {

  displayedColumns: string[] = ['id', 'name', 'type', 'price',];
  dataSource!: MatTableDataSource<IData>;
  posts: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dataService: DataService
  ) {
    this.dataService.getData().subscribe(data => {
      console.log(data)

      this.posts = data
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
