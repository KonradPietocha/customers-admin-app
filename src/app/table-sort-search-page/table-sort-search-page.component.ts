import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { CustomersService } from '../customers.service';
import { Customer } from '../interface/customer';

@Component({
  selector: 'app-table-sort-search-page',
  templateUrl: './table-sort-search-page.component.html',
  styleUrls: ['./table-sort-search-page.component.scss']
})
export class TableSortSearchPageComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'lastName',
    'birthDate',
    'branch',
    'branchCategory',
    'phone',
    'eMail'
  ];
  dataSource: MatTableDataSource<Customer>;
  editCustomers: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.getCustomers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getCustomers(): void {
    this.customersService.getCustomers()
      .subscribe(customers => this.dataSource = new MatTableDataSource(customers));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAdd(): void {
    this.editCustomers = true;
    console.log(this.editCustomers);
  }
}
