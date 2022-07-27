import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, OnChanges {
  dataSource: MatTableDataSource<any>;
  filterForm: FormGroup = new FormGroup({});
  @Input() data: any[] = [];
  @Input() config: any = {};
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges() {
    this.renderPage(this.data);
  }

  initForm() {
    let fields: any = {};
    this.config.fields
      .filter((ele: any) => ele.search)
      .map((ele: any) => ele.fieldName)
      .forEach((ele: any) => (fields[ele] = []));
    this.filterForm = this.fb.group(fields);
    this.filterForm.valueChanges.subscribe((selectedValue) => {
      this.applyFilter();
    });
  }
  applyFilter() {
    let data = this.data;
    const searchFields = this.filterForm.value;
    for (let field in searchFields) {
      if (searchFields[field]) {
        const filterType = this.config.fields.find((e: any) => e.fieldName === field && e.search)?.search?.filterType;
        switch (filterType) {
          case 'date':
            data = data.filter((ele) => {
              if (ele[field]) {
                return !(
                  moment(ele[field]).isAfter(searchFields[field], 'date') ||
                  moment(ele[field]).isBefore(searchFields[field], 'date')
                );
              } else {
                return false;
              }
            });
            break;
          case 'text':
            data = data.filter((ele) => {
              if (ele[field]) return ele[field].toLowerCase().includes(searchFields[field].toLowerCase());
            });
            break;
          default:
            break;
        }
      }
    }
    this.renderPage(data);
  }

  renderPage(data: any[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
