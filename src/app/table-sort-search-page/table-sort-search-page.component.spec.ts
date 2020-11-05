import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSortSearchPageComponent } from './table-sort-search-page.component';

describe('TableSortSearchPageComponent', () => {
  let component: TableSortSearchPageComponent;
  let fixture: ComponentFixture<TableSortSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSortSearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSortSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
